import React, { useState } from "react";
import { pokemonApi } from "../../../api/index";
import { useDispatch, useSelector} from "react-redux";
import {addPokemon} from "../../../store/slices/pokemons";
import {selectPokemon } from "../../../store/slices/currentPokemon";
import { addSearchHistory } from "../../../store/slices/searchHistory";
import type { Pokemon, RootState } from "../../../store/types";

import "../../styles.css";

import { mock, mockdata, mockPokemonResponse } from "../../../mockdata/example";


const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const searchHistory: string[] = useSelector((state: RootState) => state.searchHistory);

  const dispatch = useDispatch();
  const fetchPokemon = async () => {
    try {
      if (searchText) {
        const url = `/pokemon/${searchText}`;
        const response = await pokemonApi.get(url);

        // mocked data
        // const response = mockPokemonResponse; 
        // const response = mockdata[0];
        // const response = mock(); 
        
        const returnPokemon = response.data;
        dispatch(addPokemon(returnPokemon));
        dispatch(selectPokemon(returnPokemon));
        dispatch(addSearchHistory(searchText));
      }
    } catch (e) {
      alert("No pokemon found!");
      console.log("api call err: ", e);
    }
  };

  // useEffect(() => {fetchPokemon();}, []);

const onSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  e.preventDefault();
  fetchPokemon();
  setSearchText("");
};

  return (
    <div className="pokemon-search-bar">
      <input
        id="ice-cream-choice"
        list="history"
        type="input"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search pokemon by id or name "
        className="pokemon-search-bar__input-box"
      ></input>
      <datalist id="history">
        {searchHistory.map((x, i) => (
          <option value={x} key={i}></option>
        ))}
      </datalist>
      <button
        onClick={(e) => onSearch(e)}
        className="pokemon-search-bar__search-button"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
