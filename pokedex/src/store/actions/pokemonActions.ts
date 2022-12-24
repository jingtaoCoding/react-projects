import {ActionTypes} from "../constants/actionTypes"

export const selectPokemon = (pokemon: any) => {
  return {
    type: ActionTypes.SELECT_POKEMON,
    payload: pokemon,
  };
};

export const addPokemon = (pokemon: any) => {
  return {
    type: ActionTypes.ADD_POKEMON,
    payload: pokemon,
  };
};
