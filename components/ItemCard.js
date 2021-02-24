import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';

import styled from '@emotion/native';
import CustomButton from './Button';

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 20px;
`;

const TextContainer = styled.View`
  display: flex;
  justify-content: center;
`;

const StyledImage = styled.Image`
  width: 200px;
  height: 200px;
  margin: 0;
`;
const StyledText = styled.Text`
  margin: 3px 0;
`;

const ItemCard = (props) => {

  return (
    <Container>
      <StyledImage
        source={{
          uri:
            'https://i.pinimg.com/564x/c6/aa/7f/c6aa7f7ba36bef13033940fb0836e359.jpg',
        }}
        style={styles.image}
        resizeMode="cover"
      />
      <TextContainer>
        <StyledText>{props.item.name}</StyledText>
        <StyledText>{props.item.department.id}</StyledText>
        <StyledText>{props.item.priceString}</StyledText>
      </TextContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
export default ItemCard;
