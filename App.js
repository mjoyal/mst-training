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

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';



const App = () => {
  return (
    <StoreProvider>
      <View style={{flex: 1, justifyContent: 'center', alignItems: "center"}}>
        <Text>Hello Queue Bitches</Text>
      </View>
    </StoreProvider>
  );
};


export default App;
