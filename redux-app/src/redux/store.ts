// import rootReducer from "./reducers";
// import { createStore } from "redux";

// const store = createStore(rootReducer);
// export { store };

import rootReducer from "./reducers/rootReducer"
import { configureStore } from '@reduxjs/toolkit'
// ...
import {userReducer, addUserReducer} from "./reducers/addUserReducer";
export const store2 = configureStore({
  reducer: {
    user: addUserReducer,
    user2: userReducer,
  }
})
export const store = configureStore({
  reducer: rootReducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch