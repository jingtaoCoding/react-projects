import React from "react";
import SinglePokemon from "../components/pokemon/SinglePokemon";
import SearchBar from "../components/pokemon/SearchBar";
import PokemonCarousel from "../components/pokemon/PokemonCarousel";
import "./styles.css";

const SearchPokemon: React.FC = () => {
  return (
    <div className="pokemon-search-container">
      <div className="search-title">
        <h1>Pokedex</h1>
      </div>
      <SearchBar />
      <SinglePokemon />
      <hr className="solid"></hr>
      <PokemonCarousel />
    </div>
  );
};

export default SearchPokemon;