import React from "react";
import { View, Text, StyleSheet, Button} from "react-native";

const QueueScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>
        Queue Screen!
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

export default QueueScreen; 