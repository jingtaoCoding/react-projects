import { createSlice } from "@reduxjs/toolkit";
import { ActionTypes } from "../constants"
import type{ Action, Pokemon} from "../types"

const initialState: Pokemon | {} = {}

export const currentPokemonSlice = createSlice(
  {
    name: "currentPokemon",
    initialState,
    reducers: {
      // set the current pokemon
      selectPokemon: (state, { payload }: Action) => {
        return payload;
      },
    },
  }
);

export const {selectPokemon } = currentPokemonSlice.actions;
export default currentPokemonSlice.reducer;