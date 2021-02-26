import React, {useState} from "react";
import { StyleSheet, TextInput} from "react-native";


const DefaultInput = ({placeholder, onChange, ...props}) => {
const [textValue, setTextValue] = useState(placeholder)
  return (
    <TextInput 
        style={styles.input}
        value={textValue}
        onChangeText={onChange}
    />
  );
}; 

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 2, 
        borderBottomColor: 'black', 
        width: 200
    }
}); 

export default DefaultInput; 