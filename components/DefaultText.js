import React from "react";
import { Text, StyleSheet } from "react-native";


const DefaultText = ({type, ...props}) => {
  return (
      <Text style={styles[type] || styles.default}>{props.children}</Text>
  )
}; 

const styles = StyleSheet.create({
  default: {
    fontSize: 14,
    paddingVertical: 5
  }, 
  h1: {
    fontSize: 24, 
    fontWeight: '700', 
    paddingVertical: 5
  }, 
  h2: {
    fontSize: 20, 
    fontWeight: '700', 
    paddingVertical: 5
  }, 
  h3: {
    fontSize: 16, 
    fontWeight: '700', 
    paddingVertical: 5
  }

}); 

export default DefaultText; 