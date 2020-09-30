import React from 'react'
import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import theme from 'theme'
import { ScrollContainer, CardContainer } from 'components/UI/Containers'

describe('UI Containers Tests', () => {
  it('Render Scroll Container', () => {
    const scrollContainer = render(
      <ThemeProvider theme={theme}>
        <ScrollContainer />
      </ThemeProvider>,
    )
    expect(scrollContainer).toBeTruthy()
  })

  it('Render Card Container', () => {
    const button = render(
      <ThemeProvider theme={theme}>
        <CardContainer />
      </ThemeProvider>,
    )
    expect(button).toBeTruthy()
  })
})
