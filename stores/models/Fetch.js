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
        const response = yield axios.get(
          `https://5f6c842e34d1ef0016d58307.mockapi.io/api/v1/${collection}`,
        );
        self[collection] = response.data;
        self.isLoading = false;
      }),
    }));
}
