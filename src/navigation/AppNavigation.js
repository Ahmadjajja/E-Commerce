import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
import Login from "../screens/authentication/login/Login"
import SignUp from "../screens/authentication/signUp/SignUp"
import ForgotPassword from "../screens/authentication/forgotPassword/ForgotPassword"
import Home from '../screens/frontend/home/Home';



const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    // <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} options={{ title: 'Home Screen' }} />
        <Drawer.Screen name="Login" component={Login} options={{ title: 'Login Screen' }} />
        <Drawer.Screen name="SignUp" component={SignUp} options={{ title: 'SignUp Screen' }}/>
        <Drawer.Screen name="ForgotPassword" component={ForgotPassword} options={{ title: 'Forgot Password Screen' }}/>
      </Drawer.Navigator>
    // {/* </NavigationContainer> */}
  );
}