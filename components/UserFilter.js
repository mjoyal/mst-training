import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import {observer, inject} from 'mobx-react';
import {Picker} from '@react-native-picker/picker';

import RNPickerSelect from 'react-native-picker-select';

const UserFilter = inject('userStore')(
  observer(({userStore}) => {
    if (userStore.isLoading) {
      return null;
    }

    const users = userStore.users.map((user) => {
      return {label: user.name, value: user.id};
    });

    return (
      <View>
        <RNPickerSelect
          placeholder={{label: 'Select a user', value: null}}
          items={users}
          onValueChange={(value) => userStore.setSelectedUser(value)}
          style={pickerSelectStyles}
        />
      </View>
    );
  }),
);

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: '#141330',
    borderRadius: 4,
    color: '#141330',
    paddingRight: 30,
    marginVertical: 10,
    marginHorizontal: 15, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: '#141330',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
export default UserFilter;

// const users = userStore.users.map((user) => {
//   return {label: user.name, value: user.id};
// });

{
  /* <DropDownPicker
          items={users}
          defaultValue={userStore?.selectedUser?.id}
          onChangeItem={(item) => userStore.setSelectedUser(item.value)}
          containerStyle={{width: 200}}
        /> */
}
