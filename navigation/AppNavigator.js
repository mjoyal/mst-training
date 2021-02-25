import React from 'react'

import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen'; 
import LoginScreen from '../screens/LoginScreen'; 
import QueueScreen from '../screens/QueueScreen'; 
import FavouritesScreen from '../screens/FavouritesScreen'; 
import SongLibraryScreen from '../screens/SongLibraryScreen'; 

const Stack = createStackNavigator(); 
const Tab = createBottomTabNavigator(); 

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

const MainNavigator = () => {
 return (
    <Tab.Navigator>
    <Tab.Screen 
      name="Home"
      component={StackNavigator}
    />
    <Tab.Screen 
      name="Favourites"
      component={FavouritesScreen}
    />
    <Tab.Screen 
      name="Library"
      component={SongLibraryScreen}
    />
  </Tab.Navigator>
 )
}; 

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MainNavigator/>
    </NavigationContainer>
  )
}; 



export default AppNavigator; 