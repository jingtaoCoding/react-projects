import React, { useEffect, useState } from "react";
import { pokemonApi } from "../api/index";
import SinglePokemon from "../components/pokemon/SinglePokemon";
import SearchBar from "../components/pokemon/SearchBar";
// import { useSelector } from "react-redux";
// type Pokemon = {
//   name: string;
//   age: number;
// }
// interface RootState {
//   pokemon: Pokemon
// }

const SearchPokemon = () => {

  
  const [pokemon, setPokemon] = useState<string>("pikachu");
  const url = `/pokemon/${pokemon}`;

  
  const fetchPokemon = async () => {
    console.log("--- api call to get a pokemon ---- ")
    // try {
    //   const response = await pokemonApi.get(url);
    //   console.log(response.data);
    // } catch (e) {
    //   console.log(e);
    // }
  };

  useEffect(() => {fetchPokemon();}, []);
  // const curPokemon  = useSelector((state: RootState)=> state.pokemon));
  // console.log(pokemon)

  
  return (
    <div className="pokemon-search-container">
      <div> Search Pokemon by id or name </div>
      <SearchBar />
      <SinglePokemon />
    </div>
  );
};

export default SearchPokemon;