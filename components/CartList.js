import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {observer, inject} from 'mobx-react';
import styled from '@emotion/native';
import ItemCard from './ItemCard';
import CustomButton from './Button';

const Container = styled.View`
  display: flex;
  align-items: center;
`;

const CartList = inject('cartStore')(
  observer(({cartStore}) => {
    if (cartStore.isLoading) {
      return null;
    }
    return (
      <Container>
        {cartStore.cartItemsByUser.map((cartItem) => {
          return (
            <>
              <ItemCard item={cartItem.itemId} key={cartItem.itemId} />
              <Text>added to cart {cartItem.timeSinceCreated}</Text>
              <CustomButton
                text="remove"
                onPress={() => cartStore.deleteItem(cartItem)}
              />
            </>
          );
        })}
      </Container>
    );
  }),
);

export default CartList;
