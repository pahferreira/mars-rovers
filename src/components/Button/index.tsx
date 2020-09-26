import React, { FC } from 'react'
import { ButtonContainer, ButtonText } from './styled'

type Props = {
  children?: string
  color?: string
  textColor?: string
}

const Button: FC<Props> = (props: Props) => {
  const { children, textColor, color } = props
  return (
    <ButtonContainer color={color}>
      <ButtonText color={textColor}>{children}</ButtonText>
    </ButtonContainer>
  )
}

export default Button
