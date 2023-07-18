import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import themeColors from '../theme'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
            <Stack.Screen  name='Home' options={{headerShown:false}} component={HomeScreen} />
            <Stack.Screen  name='Welcome' options={{headerShown:false}} component={WelcomeScreen} />
            <Stack.Screen  name='Login' options={{headerShown:false}} component={LoginScreen} />
            <Stack.Screen  name='Signup' options={{headerShown:false}} component={SignUpScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
