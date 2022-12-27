import React from "react";
import PokemonDetails from "../components/pokemon/PokemonDetails";

import "./styles.css";

const SinglePokemonPage: React.FC = () => {
  return (
    <div className="single-pokemon">
      <div className="single-pokemon-title">
        <h1> Pokemon Details</h1>
      </div>
      <PokemonDetails />
    </div>
  );
};

export default SinglePokemonPage;
