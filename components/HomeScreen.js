import React from 'react';
import {View, Text, ScrollView, Button} from 'react-native';

import DepartmentFilter from './DepartmentFilter';
import NavBar from './NavBar';
import ItemList from './ItemList';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        <NavBar navigation={navigation} />

        <DepartmentFilter />
        <ItemList />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
