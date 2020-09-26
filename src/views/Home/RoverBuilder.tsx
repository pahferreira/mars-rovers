import React, { FC } from 'react'
import { CardContainer } from 'components/UI/Containers'
import { Subtitle, Label, Tip } from 'components/UI/Texts'
import { IRoverBuilder } from 'types/rovers'
import { Input, InputContainer } from './styled'

type Props = {
  rover: IRoverBuilder
}

const RoverBuilder: FC<Props> = (props: Props) => {
  const { rover } = props
  return (
    <CardContainer>
      <Subtitle>Rover {rover.id}</Subtitle>
      <InputContainer>
        <Label>Initial Position</Label>
        <Input placeholder="Enter the initial position and orientation" />
        <Tip>Ex: 1 1 N</Tip>
      </InputContainer>
      <InputContainer>
        <Label>Commands</Label>
        <Input placeholder="Enter the commands for this rover" />
        <Tip>Ex: LMMRM</Tip>
      </InputContainer>
    </CardContainer>
  )
}

export default RoverBuilder
