import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import {observer, inject} from 'mobx-react';

import styled from '@emotion/native';

const BackgroundImage = styled.ImageBackground`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 10px;
`;

const CustomCart = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
`;

const CartText = styled.Text`
  color: #141330;
  font-weight: 700;
  margin-top: 8px;
`;

const Cart = inject(
  'cartStore',
  'userStore',
)(
  observer(({cartStore, userStore, navigation}) => {
    if (cartStore.isLoading || !userStore.selectedUser) {
      return null;
    }
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <BackgroundImage source={require('../assets/shopping-bag.png')}>
            <CartText>{cartStore.cartCount}</CartText>
          </BackgroundImage>
        </TouchableOpacity>
      </View>
    );
  }),
);

export default Cart;
