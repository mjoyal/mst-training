import {types} from 'mobx-state-tree';
import UserStore from './models/UserStore';
import TrackStore from './models/ItemStore';
import QueueStore from './models/CartStore';


const RootStoreModel = types.model('RootStore').props({
  userStore: types.optional(UserStore, {}),
  trackStore: types.optional(TrackStore, {}),
  queueStore: types.optional(QueueStore, {})
});

export default RootStoreModel;
