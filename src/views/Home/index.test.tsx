import React from 'react'
import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import theme from 'theme'
import Home from '.'

describe('Home Test', () => {
  it('Render Home Screen', () => {
    const fakeParams = {
      rovers: [],
      endPlateau: '',
    }
    const home = render(
      <ThemeProvider theme={theme}>
        <Home route={{ params: fakeParams }} />
      </ThemeProvider>,
    )

    expect(home).toBeTruthy()
  })
})
