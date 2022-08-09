import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from "../screens/authentication/login/Login"
import SignUp from "../screens/authentication/signUp/SignUp"
import ForgotPassword from "../screens/authentication/forgotPassword/ForgotPassword"
import Home from '../screens/frontend/home/Home';
import Cart from '../screens/frontend/cart/Cart';
import Wishlist from '../screens/frontend/wishlist/Wishlist';
import { useAuthContext } from '../context/ContextApi';
import { executeNativeBackPress } from 'react-native-screens';

// const Drawer = createDrawerNavigator();

export default function AppNavigator() {

  const { isAuthenticated } = useAuthContext();
  const Stack = createNativeStackNavigator();
  // const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();


  return (
    <>
      {false ?
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
          {/* <Drawer.Navigator initialRouteName="Home" >
            <Drawer.Screen name="Home" component={Home} options={{ title: 'Home Screen' }} />
            <Drawer.Screen name="Cart" component={Cart} options={{ title: 'Cart' }} />
            <Drawer.Screen name="Wishlist" component={Wishlist} options={{ title: 'Wishlist' }} />
          </Drawer.Navigator> */}
          <Tab.Navigator initialRouteName="Home" >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Wishlist" component={Wishlist} />
          </Tab.Navigator>
        </>
      }
    </>
  );
}