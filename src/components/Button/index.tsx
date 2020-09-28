import React, { FC } from 'react'
import { ButtonContainer, ButtonText } from './styled'

type Props = {
  children?: string
  color?: string
  textColor?: string
  onPress: () => void
}

const Button: FC<Props> = (props: Props) => {
  const { children, textColor, color, onPress } = props
  return (
    <ButtonContainer color={color} onPress={onPress}>
      <ButtonText color={textColor}>{children}</ButtonText>
    </ButtonContainer>
  )
}

export default Button
