import React from "react";
import { View, Text, StyleSheet, Button} from "react-native";

const SongLibraryScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>
        Library Screen!
      </Text>
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