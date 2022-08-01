import { View, Text } from 'react-native'
import AppNavigator from "./src/navigation/AppNavigation"
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
const App = () => {

  return (
    <>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  )
}

export default App

