import React, { FC, useEffect, useState, useContext } from 'react'
import { ScrollContainer } from 'components/UI/Containers'
import { Title } from 'components/UI/Texts'
import {
  EScreens,
  ResultsScreenNavigationProps,
  TRoute,
} from 'types/navigation'
import { IRover } from 'types/rovers'
import { TNavigationRover } from 'types/rover-navigate'
import Rover from './Rover'
import { TitleContainer, ButtonsContainer } from './styled'
import Button from 'components/Button'
import { ThemeContext } from 'styled-components'
import { Theme } from 'theme'
import { generatePlateau, generatePosition, navigate } from 'helpers/commons'

type Props = {
  navigation?: ResultsScreenNavigationProps
  route: TRoute
}

const Results: FC<Props> = (props: Props) => {
  const { navigation, route } = props
  const theme: Theme = useContext(ThemeContext)
  const [roversToDisplay, setRoversToDisplay] = useState<Array<IRover>>([])

  useEffect(() => {
    const { endPlateau, rovers } = route.params
    const plateau = generatePlateau(endPlateau)
    const roversFormatted: Array<TNavigationRover> = rovers.map(
      (rover: IRover) => ({
        ...generatePosition(rover.position, rover.commands),
        id: rover.id,
      }),
    )
    const roversNavigated = roversFormatted.map((rover: TNavigationRover) => ({
      id: rover?.id || 0,
      position: navigate(plateau, rover),
      commands: '',
    }))
    setRoversToDisplay(roversNavigated)
  }, [route.params])

  const handleNewNavigation = () => {
    navigation?.navigate(EScreens.HOME, { rovers: [] })
  }

  const handleKeepNavigating = () => {
    navigation?.navigate(EScreens.HOME, { rovers: roversToDisplay })
  }

  return (
    <ScrollContainer>
      <TitleContainer>
        <Title>Results</Title>
      </TitleContainer>
      {roversToDisplay.map((rover: IRover) => (
        <Rover key={rover.id} rover={rover} />
      ))}
      <ButtonsContainer>
        <Button onPress={handleNewNavigation} color={theme?.colors?.primary}>
          Start new Navigation!
        </Button>
        <Button onPress={handleKeepNavigating} color={theme?.colors?.secondary}>
          Keep Navigating!
        </Button>
      </ButtonsContainer>
    </ScrollContainer>
  )
}

export default Results
