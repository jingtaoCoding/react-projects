import { ActionTypes } from "../constants/actionTypes"

type Action ={
  type: string,
  payload: any,
}

// const inititalState = { name: "Pokemon 1", age: 23 };
const inititalState = {};
export const addPokemonReducer = (state = inititalState, {type, payload}: Action) => {
  switch (type) {
    case ActionTypes.ADD_POKEMON: {
      return { ...state, ...payload };
    }
    case ActionTypes.SELECT_POKEMON:{
      return {...state, ...payload};
    }
  }
  return state;
};

export const pokemonReducer = (state = inititalState, { type, payload }: Action) => {
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
