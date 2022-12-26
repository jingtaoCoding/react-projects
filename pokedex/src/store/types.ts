export type Pokemon = {
  name: string;
  age: number;
  id: number;
  sprites: { back_default?: string };
  abilities: any[];
}

export type Action = {
  type: string;
  payload: any;
}

export interface RootState {
  pokemons: Pokemon[];
  currentPokemon: Pokemon | {};
  searchHistory: string[];
}
