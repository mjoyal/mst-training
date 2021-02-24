import {types} from 'mobx-state-tree';

export const Track = types.model({
  id: types.maybe(types.identifier), 
  name: types.maybe(types.string),
  artist: types.maybe(types.string),
  albumImage: types.maybe(types.string)
}); 

const TrackStore = types.model({
  tracks: types.maybe(types.array(Track))
}); 

export default TrackStore;