import React, { useState } from "react";
import { useEffect } from "react";
import { View, Text, StyleSheet, Button} from "react-native";
import DefaultInput from '../components/DefaultInput'; 


const LoginScreen = ({navigation}) => {
  const [isSubmitted, setIsSubmitted ] = useState(false); 

  useEffect(() => {
    console.log(isSubmitted); 
  }, [isSubmitted]); 

  const handleLogin = () => {
    setIsSubmitted(true)
  }; 
  return (
    <View style={styles.screen}>
      <DefaultInput placeholder="username"/>
      <Button
        title="login"
        onPress={handleLogin}
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

export default LoginScreen; 