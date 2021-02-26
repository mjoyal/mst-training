import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

import DefaultText from './Defaults/DefaultText';

const QueueCard = ({name, owner, image, navigation, id}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Queue', {
          queueId: id
        })
      }}
    >
      <View style={styles.container}>
        <View>
          <Image style={styles.image} source={{uri: image}}/>
        </View>
        <View style={styles.textContainer}>
          <DefaultText type="h3">{name}</DefaultText>
          <DefaultText>Started by {owner}</DefaultText>
        </View>
      </View>
    </TouchableOpacity>

  ); 
}; 

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 20
  },
  image: {
    width: 70, 
    height: 70, 
    resizeMode: 'contain', 
  }, 
  textContainer: {
    paddingHorizontal: 20
  }

}); 

export default QueueCard; 