import { View, Text } from 'react-native'
import AppNavigator from "./src/navigation/AppNavigation"
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuthContext } from './src/context/ContextApi';
import AuthContextProvider from "./src/context/ContextApi"
const App = () => {

  return (
    <>
      <AuthContextProvider> 
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </AuthContextProvider>
    </>
  )
}

export default App

