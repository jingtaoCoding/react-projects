import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from "./reducers/rootReducer"
// export const store = configureStore({
//   reducer: rootReducer
// })

import pokemonsReducer from './slices/pokemons'
import currentPokemonReducer from './slices/currentPokemon'
import searchHistoryReducer from './slices/searchHistory'
const rootReducer = {
  pokemons: pokemonsReducer,
  currentPokemon: currentPokemonReducer,
  searchHistory: searchHistoryReducer,
}

export const store = configureStore({
  reducer: rootReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch