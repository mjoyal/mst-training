import {types, flow, destroy, getParent, getRoot} from 'mobx-state-tree';

import {Item} from './ItemStore';
import {User} from './UserStore';
import axios from 'react-native-axios';

import {timeHelper} from './TimeHelper';

const CartItemBase = types
  .model({
    id: types.maybe(types.identifier),
    createdAt: types.maybe(types.string),
    userId: types.maybe(types.reference(User)),
    itemId: types.maybe(types.reference(Item)),
    status: types.maybe(types.string),
  })
  .actions((self) => ({
    remove() {
      getParent(self, 2).remove(self);
    },
  }));

const CartItem = types.compose(CartItemBase, timeHelper);

const CartStoreModel = types
  .model({
    cartItems: types.array(CartItem),
    isLoading: types.optional(types.boolean, false),
  })
  .actions((self) => {
    return {
      afterCreate: flow(function* afterCreate() {
        yield self.getData();
      }),
      getData: flow(function* getData() {
        self.isLoading = true;

        const response = yield axios.get(
          'https://5f6c842e34d1ef0016d58307.mockapi.io/api/v1/cartItems',
        );
        self.addData(response.data);
        self.isLoading = false;
      }),
      addData(data) {
        data.map((cartItem) => {
          return delete cartItem.item;
        });
        self.cartItems = data;
      },
      addToCart: flow(function* addToCart(item, user) {
        if (!user) {
          return;
        }

        const newItem = {
          item,
          itemId: item.id,
          userId: user.id,
        };
        try {
          const response = yield axios.post(
            'https://5f6c842e34d1ef0016d58307.mockapi.io/api/v1/cartItems/',
            newItem,
          );
          self.cartItems.push(response.data);
        } catch (e) {
          console.error('Failed to save', e);
        }
      }),
      deleteItem: flow(function* deleteItem(cartItem) {
        // delete from api
        try {
          yield axios.delete(
            `https://5f6c842e34d1ef0016d58307.mockapi.io/api/v1/cartItems/${cartItem.id}`,
          );
        } catch (e) {
          console.error('Failed to delete', e);
        }
        // remove from model
        destroy(cartItem);
      }),
    };
  })
  .views((self) => {
    const rootStore = getRoot(self);
    const userStore = rootStore.userStore;

    return {
      get cartCount() {
        const userCartCount = self.cartItems.filter((item) => {
          if (userStore.selectedUser) {
            return item.userId.id === userStore.selectedUser.id;
          }
          return null;
        });
        return userCartCount.length;
      },
      get cartItemsByUser() {
        const filteredItems = self.cartItems.filter((cartItem) => {
          if (userStore.selectedUser) {
            return cartItem.userId.id === userStore.selectedUser.id;
          }
        });
        return filteredItems;
      },
    };
  });

// const CartStoreModel = types.compose(CartStore, timeHelper);

export default CartStoreModel;
