import React, {useState} from "react";
import { StyleSheet, TextInput} from "react-native";


const DefaultInput = ({placeholder, ...props}) => {
const [textValue, setTextValue] = useState(placeholder)
  return (
    <TextInput 
        style={styles.input}
        value={textValue}
        onChangeText={text => setTextValue(text)}
    />
  );
}; 

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 2, 
        borderBottomColor: 'black'
    }
}); 

export default DefaultInput; 