import {types} from 'mobx-state-tree';

import createFetchData from './Fetch';

// types.optional(types.Date, () => new Date())

const User = types.model({
  id: types.maybe(types.identifier),
  createdAt: types.maybe(types.string),
  name: types.maybe(types.string),
  avatar: types.maybe(types.string),
  country: types.maybe(types.string),
});

const UserStoreModel = types
  .model({
    users: types.maybe(types.array(User)),
    selectedUser: types.maybeNull(types.reference(User)),
  })
  .actions((self) => ({
    setSelectedUser(newUser) {
      self.selectedUser = newUser;
    },
  }));

const UserStore = types.compose(UserStoreModel, createFetchData('users'));

export {UserStore, User};
