/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// store
import 'react-native-gesture-handler';
import StoreProvider from './stores/index';

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import AppNavigator from "./navigation/AppNavigator";

const App = () => {
  return (
    <StoreProvider>
      <AppNavigator />
    </StoreProvider>
  );
};


export default App;
