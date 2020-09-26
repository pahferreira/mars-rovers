import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { EScreens } from 'types/navigation'
// Views
import Home from 'views/Home'
import Results from 'views/Results'

const Stack = createStackNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName={EScreens.HOME}>
        <Stack.Screen name={EScreens.HOME} component={Home} />
        <Stack.Screen name={EScreens.RESULTS} component={Results} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
