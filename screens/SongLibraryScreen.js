import React from "react";
import { View, Text, StyleSheet, Button} from "react-native";

import LibraryList from '../components/LibraryList'; 

const SongLibraryScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <LibraryList/>
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

export default SongLibraryScreen; 