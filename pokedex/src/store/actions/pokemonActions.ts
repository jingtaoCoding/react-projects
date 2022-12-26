import { ActionTypes } from "../constants"
import type{ Action, Pokemon} from "../types"

export const selectPokemon = (pokemon: Pokemon): Action => {
  return {
    type: ActionTypes.SELECT_POKEMON,
    payload: pokemon,
  };
};

export const addPokemon = (pokemon: Pokemon): Action => {
  return {
    type: ActionTypes.ADD_POKEMON,
    payload: pokemon,
  };
};
