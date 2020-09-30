import React, { FC } from 'react'
import { CardContainer } from 'components/UI/Containers'
import { Subtitle, Label, Tip } from 'components/UI/Texts'
import { IRover } from 'types/rovers'
import { Input, InputContainer } from './styled'

type Props = {
  rover: IRover
  handleInputChange: (roverId: number, key: string, value: string) => void
}

const RoverBuilder: FC<Props> = (props: Props) => {
  const { rover, handleInputChange } = props

  const onChangePosition = (text: string) => {
    handleInputChange(rover.id, 'position', text)
  }

  const onChangeCommands = (text: string) => {
    handleInputChange(rover.id, 'commands', text)
  }

  return (
    <CardContainer>
      <Subtitle>Rover {rover.id}</Subtitle>
      <InputContainer>
        <Label>Initial Position</Label>
        <Input
          placeholder="Enter the initial position and orientation"
          onChangeText={onChangePosition}
          value={rover.position}
          autoCapitalize="characters"
        />
        <Tip>Ex: 1 1 N</Tip>
      </InputContainer>
      <InputContainer>
        <Label>Commands</Label>
        <Input
          placeholder="Enter the commands for this rover"
          onChangeText={onChangeCommands}
          value={rover.commands}
          autoCapitalize="characters"
        />
        <Tip>Ex: LMMRM</Tip>
      </InputContainer>
    </CardContainer>
  )
}

export default RoverBuilder
