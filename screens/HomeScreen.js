import React from "react";
import { View, Text, StyleSheet, Button} from "react-native";

import DefaultText from '../components/Defaults/DefaultText'; 
import QueueList from '../components/QueueList'; 

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Button
        title="login"
        onPress={() => {navigation.navigate('Login')}}
      />
      <QueueList navigation={navigation}/>
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