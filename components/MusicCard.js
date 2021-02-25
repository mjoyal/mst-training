import React from "react";
import { View, Image, StyleSheet } from "react-native";

import DefaultText from './DefaultText';

const MusicCard = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{uri: 'https://images.genius.com/ed85bb9ee687b7922e35dc43a21cff1f.1000x1000x1.jpg'}}/>
      </View>
      <View>
        <DefaultText>Party</DefaultText>
        <DefaultText>Started by MacKenzie</DefaultText>
      </View>
    </View>
  ); 
}; 

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  image: {
    width: 100, 
    height: 100, 
    resizeMode: 'contain'
  }

}); 

export default MusicCard; 