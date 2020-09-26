import styled from 'styled-components/native'
import { TextProps } from 'react-native'
import { Theme } from 'theme'

interface TextType extends TextProps {
  theme: Theme
}

export const Subtitle = styled.Text<TextType>`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.metrics.medium};
  font-weight: bold;
`

export const Title = styled.Text<TextType>`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.metrics.large};
  font-weight: bold;
`

export const Text = styled.Text<TextType>`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.metrics.regular};
  margin: 5px 0;
`

export const Label = styled.Text<TextType>`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.metrics.regular};
  font-weight: bold;
`

export const Tip = styled.Text<TextType>`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.metrics.small};
`
