import React from "react";
import { View, Text, StyleSheet, Button} from "react-native";

import FavouritesList from '../components/FavouritesList'; 


const FavouritesScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <FavouritesList />
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

export default FavouritesScreen; 