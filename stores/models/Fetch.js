import {types, flow} from 'mobx-state-tree';
import axios from 'react-native-axios';

export default function createFetchData(collection) {
  return types
    .model({
      isLoading: types.optional(types.boolean, false),
    })
    .actions((self) => ({
      afterCreate: flow(function* () {
        yield self.getData();
      }),
      getData: flow(function* getData() {
        self.isLoading = true;
        try {
          const response = yield axios.get(
            `http://localhost:3000/${collection}`,
          );
          self[collection] = response.data;
          self.isLoading = false;
        } catch (e) {
          console.error('Uh oh', e)
        }
      }),
    }));
}
