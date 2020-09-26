import styled from 'styled-components/native'
import { TextProps, TouchableOpacityProps } from 'react-native'
import { Theme } from 'theme'

interface ContainerType extends TouchableOpacityProps {
  color?: string
  theme: Theme
}

export const ButtonContainer = styled.TouchableOpacity<ContainerType>`
  padding: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.white};
  border-radius: 50px;
  elevation: 5;
  width: 250px;
`

interface TextType extends TextProps {
  color?: string
  theme: Theme
}

export const ButtonText = styled.Text<TextType>`
  color: ${({ theme, color }) => (color ? color : theme.colors.white)};
  font-size: ${({ theme }) => theme.metrics.medium};
  font-weight: bold;
`
