import React from 'react'

import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen'; 
import LoginScreen from '../screens/LoginScreen'; 
import QueueScreen from '../screens/QueueScreen'; 

const Stack = createStackNavigator(); 

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
      />
      <Stack.Screen
        name='Login'
        component={LoginScreen}
      />
      <Stack.Screen
        name='Queue'
        component={QueueScreen}
      />
    </Stack.Navigator>
  )
}; 

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}; 



export default AppNavigator; 