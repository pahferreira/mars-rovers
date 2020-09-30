import React from 'react'
import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import theme from 'theme'
import Results from '.'

describe('Home Test', () => {
  it('Render Results Screen', () => {
    const fakeParams = {
      rovers: [],
      endPlateau: '',
    }
    const results = render(
      <ThemeProvider theme={theme}>
        <Results route={{ params: fakeParams }} />
      </ThemeProvider>,
    )

    expect(results).toBeTruthy()
  })
})
