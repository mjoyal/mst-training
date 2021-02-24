import React from 'react';
import {StyleSheet, Text, View, Button, FlatList} from 'react-native';
import {observer, inject} from 'mobx-react';

import styled from '@emotion/native';
import CustomButton from './Button';

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

import ItemCard from './ItemCard';

const ItemList = inject(
  'itemStore',
  'departmentStore',
  'cartStore',
  'userStore',
)(
  observer(({itemStore, departmentStore, cartStore, userStore}) => {
    if (itemStore.isLoading || departmentStore.isLoading) {
      return null;
    }
    return (
      <FlatList
        numColumns={2}
        data={itemStore.filteredByDepartment}
        renderItem={(itemData) => (
          <View>
            <ItemCard item={itemData.item} />
            <CustomButton
              text="add to cart"
              onPress={() =>
                cartStore.addToCart(itemData.item, userStore.selectedUser)
              }
            />
          </View>
        )}
      />
    );
  }),
);

const styles = StyleSheet.create({
  test: {
    backgroundColor: 'red',
  },
});
export default ItemList;
