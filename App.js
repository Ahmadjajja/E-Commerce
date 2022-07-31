import { View, Text } from 'react-native'
import AppNavigator from "./src/navigation/AppNavigation"
import Login from "./src/screens/authentication/login/Login"
import SignUp from "./src/screens/authentication/signUp/SignUp"
import ForgotPassword from "./src/screens/authentication/forgotPassword/ForgotPassword"
import Home from './src/screens/frontend/home/Home';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const App = () => {
  
const Stack = createNativeStackNavigator();
  return (
    // <>
    <NavigationContainer>
      <Stack.Navigator initialRoute="Login">
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="Home" component={Home}/>

      </Stack.Navigator>
      {/* <AppNavigator /> */}
    </NavigationContainer>
    // {/* </> */}
  )
}

export default App

