import React from 'react';
import {View, Text} from 'react-native';

import Cart from './Cart';
import UserFilter from './UserFilter';

import styled from '@emotion/native';

const Nav = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const NavBar = ({navigation}) => {
  return (
    <Nav>
      <UserFilter />
      <Cart navigation={navigation} />
    </Nav>
  );
};

export default NavBar;
