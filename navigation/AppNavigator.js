import React from 'react'

import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen'; 
import LoginScreen from '../screens/LoginScreen'; 
import QueueScreen from '../screens/QueueScreen'; 
import FavouritesScreen from '../screens/FavouritesScreen'; 
import SongLibraryScreen from '../screens/SongLibraryScreen'; 

const Home = createStackNavigator(); 
const Favourites = createStackNavigator(); 
const Library = createStackNavigator(); 
const Tab = createBottomTabNavigator(); 

const StackNavigator = () => {
  return (
    <Home.Navigator>
      <Home.Screen
        name='Home'
        component={HomeScreen}
      />
      <Home.Screen
        name='Login'
        component={LoginScreen}
      />
      <Home.Screen
        name='Queue'
        component={QueueScreen}
      />
    </Home.Navigator>
  )
}; 

const FavouritesNavigator = () => {
  return (
    <Favourites.Navigator>
      <Favourites.Screen 
        name="Favourites"
        component={FavouritesScreen}
      />
    </Favourites.Navigator>
  )
}; 

const LibraryNavigator = () => {
  return (
    <Library.Navigator>
      <Library.Screen
        name="Song Library"
        component={SongLibraryScreen}
      />
    </Library.Navigator>
  );
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
      component={FavouritesNavigator}
    />
    <Tab.Screen 
      name="Library"
      component={LibraryNavigator}
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