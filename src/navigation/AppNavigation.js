import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "../screens/authentication/login/Login"
import SignUp from "../screens/authentication/signUp/SignUp"
import ForgotPassword from "../screens/authentication/forgotPassword/ForgotPassword"
import Home from '../screens/frontend/home/Home';
import  { useAuthContext }  from '../context/ContextApi';


// const Drawer = createDrawerNavigator();

export default function AppNavigator() {

  // const { authenticated } = useAuthContext();
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();



  return (
    <>
      {!false ?
        <>
          <Stack.Navigator initialRoute="Login" screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Login" component={Login} options={{ title: 'Login Screen' }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ title: 'Forgot Password Screen' }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'SignUp Screen' }} />
          </Stack.Navigator>
        </> :
        <>
          <Drawer.Navigator initialRouteName="Home" >
            <Drawer.Screen name="Home" component={Home} options={{ title: 'Home Screen' }} />
          </Drawer.Navigator>
        </>


      }
    </>
  );
}