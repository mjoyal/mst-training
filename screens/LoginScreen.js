import React, { useState } from "react";
import { useEffect } from "react";
import {observer, inject} from 'mobx-react';
import { View, Text, StyleSheet, Button} from "react-native";
import DefaultInput from '../components/DefaultInput'; 


const LoginScreen = inject('userStore')(
  observer(({userStore}) => {
    if (userStore.isLoading) {
      return null;
    }

    const [textValue, setTextValue] = useState(''); 


    const handleLogin = () => {
      userStore.setLoggedInUser(textValue);
    }; 

    const handleLogout = () => {
      userStore.logoutUser(); 
    }; 

    if(userStore.loggedInUser) {
      return (
        <View style={styles.screen}>
          <Text>Hello, {userStore.loggedInUser.name}</Text>
          <Button
            title="logout"
            onPress={handleLogout}
          />
        </View>
      )
    }

    return (
      <View style={styles.screen}>
        <DefaultInput textValue={textValue} onChange={text => setTextValue(text)}/>
        <Button
          title="login"
          onPress={handleLogin}
        />
      </View>
    )
  }),
);


const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }, 
}); 

export default LoginScreen; 



// const LoginScreen = ({navigation}) => {
//   const [isSubmitted, setIsSubmitted ] = useState(false); 

//   useEffect(() => {
//     console.log(isSubmitted); 
//   }, [isSubmitted]); 

//   const handleLogin = () => {
//     setIsSubmitted(true)
//   }; 
//   return (
//     <View style={styles.screen}>
//       <DefaultInput placeholder="username"/>
//       <Button
//         title="login"
//         onPress={handleLogin}
//       />
//     </View>
//   )
// }; 
