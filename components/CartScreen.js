import React from 'react';
import {View, ScrollView} from 'react-native';

import NavBar from './NavBar';
import CartList from './CartList';

const CartScreen = ({navigation}) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        <NavBar navigation={navigation} />
        <CartList />
      </View>
    </ScrollView>
  );
};

export default CartScreen;
