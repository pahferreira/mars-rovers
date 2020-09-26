import styled from 'styled-components/native'
import { TextProps } from 'react-native'
import { Theme } from 'theme'

interface TextType extends TextProps {
  theme: Theme
}

export const Text = styled.Text<TextType>`
  color: ${({ theme }) => theme.colors.primary};
`
