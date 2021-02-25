import React from "react";
import { View, Text, StyleSheet, Button} from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>
        LOgin Screen!
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

export default LoginScreen; 