# mst-training

This example project helps you learn [MobX-State-Tree's](https://mobx-state-tree.js.org/intro/philosophy) core functionality.

## API

The following REST endpoints are defined on the api at https://5f6c842e34d1ef0016d58307.mockapi.io/api/v1

#### Users

- GET `/users`
- GET `/users/:id`
- POST `/users`
- PUT `/users/:id`
- DELETE `/users/:id`

#### Items

- GET `/items`
- GET `/items/:id`
- POST `/items`
- PUT `/items/:id`
- DELETE `/items/:id`

#### CartItems

- GET `/cartItems`
- GET `/cartItems/:id`
- POST `/cartItems`
- PUT `/cartItems/:id`
- DELETE `/cartItems/:id`

## General

- There should be a store for each resource, grouped under one `rootStore`
- Ensure that there is a single source of truth: Reference data if it alrerady exists somewhere in the store
- Avoid copying store state into local component state
- Use `inject` and `observer` to access stores in components
- Keep business logic in the stores and access it via `views`

## Tasks

1. Setup a clean React project and add a basic MobX-State-Tree setup with a `rootStore` and a `StoreProvider`.

2. Get all `items`, store them in a store and display them with the data they contain. Use a `flow action` to get the data with the `afterCreate` lifecycle hook and `views` to display a computed data, like a string of `price` + `currency`.

3. Normalize (pull it into its own model and reference it) the `department` property and add a `department` filter select box that filters based on the departments. By default that filter selects `All Departments`.

4. Build a user selector on the left in the top nav where a vistor can select one of the existing users and will then execute all further actions based on the selected user. Store all users and the currently selected user in the store.

5. Add a cart button to each item, so the user can add `items` to his cart. Once clicked, the `item` will be added to the `cartItems` both in the store and then saved to the api with the `PUT` method. Get the `userId` by accessing the currently selected user in the `userStore` via the `rootStore`.

6. When a user is selected, show a cart symbol on the right in the top nav at all times with a number indicating the amount of items in the cart (use a `view`). Clicking that brings you to the cart that will list all of the user's `cartItems`.

7. Add a delete button to each cart item that will delete the item from the cart both in the store and on the api with the `DELETE` method.

8. Use composition to add a `model` helper function that will add a `view` which returns the relative time since the models `createdAt` property using this library https://github.com/catamphetamine/javascript-time-ago . Display this relative time to indicate when items were added to the cart.

9. Add a `updatedAt` property to the model helper created before and add a function that allows the model to save the current time in the `updatedAt` property (so a function called `saveUpdatedDate` that is available for all models that implement the helper.
