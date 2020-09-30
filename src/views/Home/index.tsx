import React, { FC, useState, useContext, useEffect } from 'react'
import { Subtitle, Title, Text, Label, Tip } from 'components/UI/Texts'
import { ScrollContainer } from 'components/UI/Containers'
import {
  WelcomeContainer,
  InputContainer,
  Input,
  SectionContainer,
  PressArea,
  ButtonWrapper,
} from './styled'
import { IRover } from 'types/rovers'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'
import { ThemeContext } from 'styled-components'
import { Theme } from 'theme'
import RoverBuilder from './RoverBuilder'
import Button from 'components/Button'
import { HomeScreenNavigationProps, EScreens, TRoute } from 'types/navigation'

type Props = {
  navigation?: HomeScreenNavigationProps
  route: TRoute
}

const Home: FC<Props> = (props: Props) => {
  const { navigation, route } = props
  const [rovers, setRovers] = useState<Array<IRover>>([])
  const [plateauFinishPosition, setPlateauFinishPosition] = useState('')
  const theme: Theme = useContext(ThemeContext)

  useEffect(() => {
    const roversFromRoute = route.params?.rovers || []
    const roversFormated = roversFromRoute.map((rover: IRover) => ({
      ...rover,
      commands: '',
    }))
    setRovers(roversFormated)
  }, [route.params])

  const handleAddRover = () => {
    const roverId = rovers.length + 1
    const newRover = {
      id: roverId,
      position: '',
      commands: '',
    }
    setRovers((prevState) => [...prevState, newRover])
  }

  const handleInputChange = (roverId: number, key: string, value: string) => {
    const updatedRoverBuilds = rovers.map((rover: IRover) =>
      rover.id === roverId ? { ...rover, [key]: value.toUpperCase() } : rover,
    )
    setRovers(updatedRoverBuilds)
  }

  const handleChangePlateauInput = (text: string) => {
    setPlateauFinishPosition(text)
  }

  const handleNavigateToResults = () => {
    navigation?.navigate(EScreens.RESULTS, {
      rovers,
      endPlateau: plateauFinishPosition,
    })
  }

  return (
    <ScrollContainer>
      <WelcomeContainer>
        <Subtitle>Welcome to</Subtitle>
        <Title>Mars Rover!</Title>
      </WelcomeContainer>
      <Text>
        In terms of positioning, your plateau starts at the lower-left
        represented by the values (0, 0).
      </Text>
      <Text>
        We need to set the upper-right position to finish our plateau and start
        navigate.
      </Text>
      <SectionContainer>
        <Subtitle>Plateau Configuration</Subtitle>
      </SectionContainer>
      <InputContainer>
        <Label>Plateau end Position</Label>
        <Input
          placeholder="Enter upper-right position"
          keyboardType="numeric"
          value={plateauFinishPosition}
          onChangeText={handleChangePlateauInput}
        />
        <Tip>
          This input should contain two numbers separeted by whitespace.
        </Tip>
      </InputContainer>
      <SectionContainer>
        <Subtitle>Rovers</Subtitle>
        <PressArea onPress={handleAddRover}>
          <Icon name="add-circle" size={28} color={theme?.colors?.primary} />
        </PressArea>
      </SectionContainer>
      {rovers.length === 0 ? (
        <Text>No rovers added yet.</Text>
      ) : (
        rovers.map((rover: IRover) => (
          <RoverBuilder
            rover={rover}
            key={rover.id}
            handleInputChange={handleInputChange}
          />
        ))
      )}
      {rovers.length > 0 && (
        <ButtonWrapper>
          <Button
            color={theme?.colors?.primary}
            onPress={handleNavigateToResults}>
            Navigate!
          </Button>
        </ButtonWrapper>
      )}
    </ScrollContainer>
  )
}

export default Home
