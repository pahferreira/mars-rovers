import React from 'react'
import { StatusBar } from 'react-native'
import AppNavigation from './navigation'

const App = () => {
  return (
    <>
      <StatusBar hidden />
      <AppNavigation />
    </>
  )
}

export default App
