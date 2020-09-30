import React from 'react'
import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import theme from 'theme'
import { Subtitle, Title, Text, Label, Tip } from 'components/UI/Texts'

describe('UI Texts Tests', () => {
  it('Render Subtitle', () => {
    const subtitle = render(
      <ThemeProvider theme={theme}>
        <Subtitle>Test</Subtitle>
      </ThemeProvider>,
    )
    expect(subtitle).toBeTruthy()
    expect(subtitle.getByText('Test')).toBeTruthy()
  })

  it('Render Title', () => {
    const title = render(
      <ThemeProvider theme={theme}>
        <Title>Test</Title>
      </ThemeProvider>,
    )
    expect(title).toBeTruthy()
    expect(title.getByText('Test')).toBeTruthy()
  })

  it('Render Text', () => {
    const text = render(
      <ThemeProvider theme={theme}>
        <Text>Test</Text>
      </ThemeProvider>,
    )
    expect(text).toBeTruthy()
    expect(text.getByText('Test')).toBeTruthy()
  })

  it('Render Label', () => {
    const label = render(
      <ThemeProvider theme={theme}>
        <Label>Test</Label>
      </ThemeProvider>,
    )
    expect(label).toBeTruthy()
    expect(label.getByText('Test')).toBeTruthy()
  })

  it('Render Tip', () => {
    const tip = render(
      <ThemeProvider theme={theme}>
        <Tip>Test</Tip>
      </ThemeProvider>,
    )
    expect(tip).toBeTruthy()
    expect(tip.getByText('Test')).toBeTruthy()
  })
})
