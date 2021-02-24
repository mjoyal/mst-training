import {types} from 'mobx-state-tree';

import {Track} from './TrackStore';
import {User} from './UserStore'; 
 
const Queue = types.model({
  id: types.maybe(types.identifier),
  creatorId: types.maybe(types.reference(User)),
  tracks: types.maybe(types.array(Track))
}); 

const QueueStore = types.model({
  queues: types.maybe(types.array(Queue))
});

export default QueueStore; 