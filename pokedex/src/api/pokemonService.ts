import axios from "axios";
import { mock, mockdata, mockPokemonResponse } from "../mockdata/example";
import type { Pokemon } from "../store/types";

export type IApiService = ReturnType<typeof pokemonApi>
export const pokemonApi =  axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  timeout: 1000,
});

export type IFetchPokemonResponse = Pokemon | null
export const fetchPokemonService = async (searchText: string): Promise<any> => {
  try {
    if (searchText) {
      // const url = `/pokemon/${searchText}`;
      // const response = await pokemonApi.get(url);

      // mocked data
      // const response = mockPokemonResponse; 
      // const response = mockdata[0];
      const response = mock(); 

      const pokemonData = response.data;
      return pokemonData;
    }
  } catch (e) {
    console.log("api call err: ", e);
    return null;
  }
};