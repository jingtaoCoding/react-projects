import { ActionTypes } from "../constants"
import type { Action, Pokemon } from "../types"

const initialState: Pokemon[] =  []; 
export const pokemonReducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case ActionTypes.ADD_POKEMON: {
      return { ...state, ...payload };
    }
    case ActionTypes.SELECT_POKEMON: {
      return { ...state, ...payload };
    }
  }
  return state;
};

export const selectPokemonReducer = (state = {}, { type, payload }: Action) => {
  switch (type) {
    case ActionTypes.SELECT_POKEMON: {
      return { ...state, ...payload };
    }
  }
  return state;
};


