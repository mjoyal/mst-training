import {types, getRoot} from 'mobx-state-tree';

import createFetchData from './Fetch';
import {Department} from './DepartmentStore';

const Item = types
  .model({
    id: types.maybe(types.identifier),
    name: types.maybe(types.string),
    image: types.maybe(types.string),
    price: types.maybe(types.string),
    currency: types.maybe(types.string),
    department: types.maybe(types.reference(Department)),
  })
  .views((self) => ({
    get priceString() {
      return self.currency + self.price;
    },
  }));

const ItemStoreModel = types
  .model({
    items: types.maybe(types.array(Item)),
  })
  .views((self) => {
    const rootStore = getRoot(self);
    const departmentStore = rootStore.departmentStore;

    return {
      get filteredByDepartment() {
        const filteredItems = self.items.filter((item) => {
          if (departmentStore.selectedDepartment) {
            return item.department.id === departmentStore.selectedDepartment.id;
          }
          return self.items;
        });
        return filteredItems;
      },
    };
  });

const ItemStore = types.compose(ItemStoreModel, createFetchData('items'));
export {Item, ItemStore};
