import React from "react";
import { View, Text, StyleSheet, Button} from "react-native";

const QueueScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>
        Queue Screen!
      </Text>
      <Button
        title="go home"
        onPress={() => {navigation.navigate('Home')}}
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

export default QueueScreen; 