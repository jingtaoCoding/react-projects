import React from "react";
import CurrentPokemon from "../components/pokemon/CurrentPokemon";
import SearchBar from "../components/pokemon/SearchBar";
// import PokemonCarousel from "../components/pokemon/PokemonCarousel";
import PokemonGrid from "../components/pokemon/PokemonGrid";
import "./styles.css";

const SearchPokemon: React.FC = () => {
  return (
    <div className="pokemon-search-container">
      <div className="search-title">
        <h1>Pokedex</h1>
      </div>
      <SearchBar />
      <div className="search-result">
        <CurrentPokemon />
      </div>
      
      <hr className="solid"></hr>
      <PokemonGrid />
    </div>
  );
};

export default SearchPokemon;