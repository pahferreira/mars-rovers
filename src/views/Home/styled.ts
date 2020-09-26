import styled from 'styled-components/native'
import {
  TextProps,
  ViewProps,
  TextInputProps,
  TouchableOpacityProps,
} from 'react-native'
import { Theme } from 'theme'

interface TextType extends TextProps {
  theme: Theme
}

export const Text = styled.Text<TextType>`
  color: ${({ theme }) => theme.colors.primary};
`

export const WelcomeContainer = styled.View<ViewProps>`
  margin: 0 0 5%;
`
export const InputContainer = styled.View<ViewProps>`
  width: 100%;
  margin: 2% 0;
`

interface InputType extends TextInputProps {
  theme: Theme
}

export const Input = styled.TextInput<InputType>`
  width: 100%;
  border-width: 1px;
  background-color: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.black};
  margin: 5px 0;
  padding: 10px;
`

export const SectionContainer = styled.View<ViewProps>`
  flex-direction: row;
  align-items: center;
  margin: 8% 0 2%;
  width: 100%;
`

export const PressArea = styled.TouchableOpacity<TouchableOpacityProps>`
  padding: 1px 10px;
  justify-content: center;
  align-items: center;
`

export const ButtonWrapper = styled.View`
  margin: 30px 0 90px;
  width: 100%;
  align-items: center;
`
