import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import theme from '../../theme'
import Button from 'components/Button'

describe('Button Tests', () => {
  it('Button render with onPress Function', () => {
    const onPress = () => {}

    const button = render(
      <ThemeProvider theme={theme}>
        <Button onPress={onPress}>Test Text</Button>
      </ThemeProvider>,
    )
    expect(button).toBeTruthy()
  })

  it('Button should trigger on press function', async () => {
    let onPressTriggered = false
    const onPress = () => {
      onPressTriggered = true
    }
    const button = render(
      <ThemeProvider theme={theme}>
        <Button onPress={onPress}>Test Text</Button>
      </ThemeProvider>,
    )

    fireEvent.press(button.getByText('Test Text'))
    expect(onPressTriggered).toBeTruthy()
  })
})
