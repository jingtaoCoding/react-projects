import axios from "axios";

export type ApiService = ReturnType<typeof pokemonApi>
export const pokemonApi =  axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  timeout: 1000,
});


