import {types} from 'mobx-state-tree';
import {UserStore} from './models/UserStore';
import {ItemStore} from './models/ItemStore';
import CartStoreModel from './models/CartStore';
import {Departments} from './models/DepartmentStore';

const RootStoreModel = types.model('RootStore').props({
  userStore: types.optional(UserStore, {}),
  itemStore: types.optional(ItemStore, {}),
  departmentStore: types.optional(Departments, {}),
  cartStore: types.optional(CartStoreModel, {}),
});

export default RootStoreModel;
