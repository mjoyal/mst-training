import React from "react";
import { View, Text, StyleSheet, Button} from "react-native";

import DefaultText from '../components/DefaultText'; 

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>
        Home Screen!
      </Text>
      <DefaultText>Testing!</DefaultText>
      <Button
        title="go to login"
        onPress={() => {navigation.navigate('Login')}}
      />
      <Button
        title="go to queue"
        onPress={() => {navigation.navigate('Queue')}}
      />
    </View>
  )
}; 

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }, 
}); 

export default HomeScreen; 