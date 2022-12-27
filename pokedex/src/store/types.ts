// export type Pokemon = {
//   id: number;
//   name: string;
//   age: number;
//   weight: number;
//   height: number;
//   sprites: { back_default?: string };
//   abilities: any[];
// }
import type { Pokemon } from "../api/index"
export type { Pokemon } from "../api/index"
export type Action = {
  type: string;
  payload: any;
}

export interface RootState {
  pokemons: Pokemon[];
  currentPokemon: Pokemon | {};
  searchHistory: string[];
}
