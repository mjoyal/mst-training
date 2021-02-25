import {types} from 'mobx-state-tree';

import {Track} from './TrackStore';
import {User} from './UserStore'; 
import createFetchData from './Fetch';


const Queue = types.model({
  id: types.maybe(types.identifier),
  name: types.maybe(types.string),
  creatorId: types.maybe(types.reference(User)),
  tracks: types.maybe(types.array(types.reference(Track))), 
}); 

const QueueStoreModel = types.model({
  queues: types.maybe(types.array(Queue))
});

const QueueStore = types.compose(QueueStoreModel, createFetchData('queues'));

export default QueueStore; 