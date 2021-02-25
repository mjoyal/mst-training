import {types} from 'mobx-state-tree';

import {Track} from './TrackStore';
import createFetchData from './Fetch';


export const User = types.model({
  id: types.maybe(types.identifier),
  name: types.maybe(types.string),
  favourites: types.maybe(types.array(types.reference(Track)))
});

const UserStoreModel = types.model({
  users: types.maybe(types.array(User)) 
}); 

const UserStore = types.compose(UserStoreModel, createFetchData('users'));

export default UserStore;