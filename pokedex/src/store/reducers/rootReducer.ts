import { combineReducers } from "redux";
import { pokemonReducer, selectPokemonReducer } from "./pokemonReducer";

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  pokemon: selectPokemonReducer,
});

export default rootReducer;