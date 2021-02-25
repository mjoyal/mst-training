import React from "react";
import { View, Text, StyleSheet, Button} from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>
        Home Screen!
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

export default HomeScreen; 