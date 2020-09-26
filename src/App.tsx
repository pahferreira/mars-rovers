import React from 'react'
import { StatusBar } from 'react-native'
import AppNavigation from './navigation'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar hidden />
      <AppNavigation />
    </ThemeProvider>
  )
}

export default App
