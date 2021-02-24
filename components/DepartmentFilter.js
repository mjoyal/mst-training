import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {observer, inject} from 'mobx-react';

import DropDownPicker from 'react-native-dropdown-picker';
import {Picker} from '@react-native-picker/picker';

const DepartmentFilter = inject('departmentStore')(
  observer(({departmentStore}) => {
    if (departmentStore.isLoading) {
      return null;
    }

    const departments = departmentStore.departments.map((department) => {
      return (
        <Picker.Item
          label={department.id}
          value={department.id}
          key={department.id}
        />
      );
    });

    return (
      <View>
        <Picker
          selectedValue={departmentStore?.selectedDepartment?.id}
          onValueChange={(value) =>
            departmentStore.setSelectedDepartment(value)
          }>
          <Picker.Item label="All Departments" value={null} />
          {departments}
        </Picker>
      </View>
    );
  }),
);

export default DepartmentFilter;
