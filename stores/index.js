import React, {useState, useEffect, Fragment} from 'react';
import {Provider} from 'mobx-react';

import RootStoreModel from './rootStore';

async function createRootStore(setRootStore) {
  const rootStore = await RootStoreModel.create({});
  setRootStore(rootStore);
}
const StoreProvider = ({children}) => {
  const [rootStore, setRootStore] = useState(null);
  useEffect(() => {
    if (rootStore === null) {
      createRootStore(setRootStore);
    }
  }, [rootStore]);
  if (rootStore === null) {
    return <Fragment />;
  }
  return (
    <Provider rootStore={rootStore} {...rootStore}>
      {children}
    </Provider>
  );
};
export default StoreProvider;