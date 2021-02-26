import React from "react";
import { View, Text, StyleSheet, Button} from "react-native";


const QueueScreen = ({navigation, route}) => {
  const { queueId } = route.params; 
  return (
    <View style={styles.screen}>
      <Text>
        Queue Screen! {queueId}
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