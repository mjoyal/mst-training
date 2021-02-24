import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styled from '@emotion/native';

const StyledButton = styled.TouchableOpacity`
  background-color: #141330;
  padding: 8px;
`;

const ButtonText = styled.Text`
  color: white;
  text-transform: uppercase;
  font-weight: 700;
`;

const CustomButton = ({onPress, text}) => {
  return (
    <StyledButton onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </StyledButton>
  );
};

export default CustomButton;
