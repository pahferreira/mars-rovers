import styled from 'styled-components/native'
import { ScrollViewProps, ViewProps } from 'react-native'
import { Theme } from 'theme'

interface ScrollContainerType extends ScrollViewProps {
  theme: Theme
}

export const ScrollContainer = styled.ScrollView<ScrollContainerType>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 10%;
`

interface CardContainerType extends ViewProps {
  theme: Theme
}

export const CardContainer = styled.View<CardContainerType>`
  background-color: ${({ theme }) => theme.colors.white};
  elevation: 3;
  width: 98%;
  padding: 20px;
  margin: 10px 0;
  border-radius: 5px;
`
