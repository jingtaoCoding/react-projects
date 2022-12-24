import React, { useState } from "react";
import { pokemonApi } from "../../../api/index";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPokemon,
  addPokemon,
} from "../../../store/actions/pokemonActions";

import "../../styles.css";


import { pokemonResponse } from "../../../data/example";


const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const dispatch = useDispatch();
  const fetchPokemon = async () => {
    console.log("--- api call to get a pokemon ---- ");
    try {
      if (searchText) {
        const url = `/pokemon/${searchText}`;
        // const response = await pokemonApi.get(url);
        const response = pokemonResponse; // Moke data 
        // console.log(response.data);
         dispatch(addPokemon(response.data)); 
        dispatch(selectPokemon(response.data)); 
      }
    } catch (e) {
      console.log("api err: ", e);
    }
  };

  

  // useEffect(() => {
  //   fetchPokemon();
  // }, []);

  return (
    <div className="pokemon-search-bar">
      <input
        type="input"
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Input id or name"
        className="pokemon-search-bar__input-box"
      />

      <button
        onClick={(e) => {fetchPokemon();}}
        className="pokemon-search-bar__search-button"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
