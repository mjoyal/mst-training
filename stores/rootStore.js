import {types} from 'mobx-state-tree';
import UserStore from './models/UserStore';
import TrackStore from './models/TrackStore';
import QueueStore from './models/QueueStore';


const RootStoreModel = types.model('RootStore').props({
  userStore: types.optional(UserStore, {}),
  trackStore: types.optional(TrackStore, {}),
  queueStore: types.optional(QueueStore, {})
});

export default RootStoreModel;
