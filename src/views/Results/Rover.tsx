import React, { FC } from 'react'
import { CardContainer } from 'components/UI/Containers'
import { Subtitle, Label, Text } from 'components/UI/Texts'
import { IRover } from 'types/rovers'
import { TitleContainer } from './styled'

type Props = {
  rover: IRover
}

const RoverBuilder: FC<Props> = (props: Props) => {
  const { rover } = props

  return (
    <CardContainer>
      <TitleContainer>
        <Subtitle>Rover {rover.id}</Subtitle>
      </TitleContainer>
      <Label>Rover Current Position</Label>
      <Text>{rover.position}</Text>
    </CardContainer>
  )
}

export default RoverBuilder
