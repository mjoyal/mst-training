import {types, flow} from 'mobx-state-tree';
import axios from 'react-native-axios';
const Department = types.model({
  id: types.maybe(types.identifier),
});

const Departments = types
  .model({
    departments: types.maybe(types.array(Department)),
    isLoading: types.optional(types.boolean, false),
    selectedDepartment: types.maybeNull(types.reference(Department)),
  })
  .actions((self) => ({
    afterCreate: flow(function* () {
      yield self.getData();
    }),
    getData: flow(function* getData() {
      self.isLoading = true;
      const response = yield axios.get(
        'https://5f6c842e34d1ef0016d58307.mockapi.io/api/v1/items',
      );
      // const data = yield response.json();
      self.addData(response.data);
      self.isLoading = false;
    }),
    addData(data) {
      const departments = data.map((item) => {
        return item.department;
      });
      const uniqueDepartments = [...new Set(departments)];
      const readyData = uniqueDepartments.map((item) => {
        return {id: item};
      });
      self.departments = readyData;
    },
    setSelectedDepartment(newDepartment) {
      self.selectedDepartment = newDepartment;
    },
  }));

export {Departments, Department};
