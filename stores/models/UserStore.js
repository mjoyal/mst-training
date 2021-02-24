import {types} from 'mobx-state-tree';

import {Track} from './TrackStore';

export const User = types.model({
  id: types.maybe(types.identifier),
  name: types.maybe(types.string),
  favourites: types.maybe(types.array(Track))
});

const UserStore = types.model({
  users: types.maybe(types.array(User)) 
}); 

export default UserStore;