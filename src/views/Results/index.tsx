import React, { FC, useEffect, useState, useContext } from 'react'
import { ScrollContainer } from 'components/UI/Containers'
import { Title } from 'components/UI/Texts'
import {
  EScreens,
  ResultsScreenNavigationProps,
  TRoute,
} from 'types/navigation'
import { IRover } from 'types/rovers'
import Rover from './Rover'
import { TitleContainer, ButtonsContainer } from './styled'
import Button from 'components/Button'
import { ThemeContext } from 'styled-components'
import { Theme } from 'theme'

type Props = {
  navigation: ResultsScreenNavigationProps
  route: TRoute
}

const Results: FC<Props> = (props: Props) => {
  const { navigation, route } = props
  const theme: Theme = useContext(ThemeContext)
  const [rovers, setRovers] = useState<Array<IRover>>([])

  useEffect(() => {
    const roverBuilders = route.params.rovers
    setRovers(roverBuilders)
  }, [route.params.rovers])

  const handleNewNavigation = () => {
    navigation.navigate(EScreens.HOME, { rovers: [] })
  }

  const handleKeepNavigating = () => {
    navigation.navigate(EScreens.HOME, { rovers })
  }

  return (
    <ScrollContainer>
      <TitleContainer>
        <Title>Results</Title>
      </TitleContainer>
      {rovers.map((rover: IRover) => (
        <Rover key={rover.id} rover={rover} />
      ))}
      <ButtonsContainer>
        <Button onPress={handleNewNavigation} color={theme.colors.primary}>
          Start new Navigation!
        </Button>
        <Button onPress={handleKeepNavigating} color={theme.colors.secondary}>
          Keep Navigating!
        </Button>
      </ButtonsContainer>
    </ScrollContainer>
  )
}

export default Results
