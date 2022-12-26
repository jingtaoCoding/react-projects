import React, { useState } from "react";
import { pokemonApi } from "../../../api/index";
import { useDispatch} from "react-redux";
import {addPokemon} from "../../../store/slices/pokemons";
import { selectPokemon } from "../../../store/slices/currentPokemon";
import "../../styles.css";

import { pokemonResponse } from "../../../data/example";

const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const dispatch = useDispatch();
  const fetchPokemon = async () => {
    console.log("--- api call to get a pokemon ---- ");
    try {
      if (searchText) {
        // const url = `/pokemon/${searchText}`;
        // const response = await pokemonApi.get(url);

        // mocked data
        const response = pokemonResponse; 
        
        const returnPokemon = response.data;
        dispatch(addPokemon(returnPokemon));
        dispatch(selectPokemon(returnPokemon));
      }
    } catch (e) {
      alert("No pokemon found!");
      console.log("api call err: ", e);
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
        onClick={(e) => {
          fetchPokemon();
        }}
        className="pokemon-search-bar__search-button"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
