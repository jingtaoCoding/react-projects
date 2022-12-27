import React from "react";
import {Link } from "react-router-dom";
import type { Pokemon, RootState } from "../../../store/types";

import "../../styles.css";

interface Props{
  pokemon: Pokemon,
}
const PokemonPreview: React.FC<Props> = ({pokemon}) => {
  return (
    <div className="pokemon-preview">
      <div className="pokemon-preview__title">
        <h3>
          {pokemon.name} [{pokemon.id}]
        </h3>
      </div>
      <div className="pokemon-preview__image">
        <Link to={`/details/${pokemon.id}`}> <img
            width="200px"
            height="240px"
            src={pokemon.sprites.other.dream_world.front_default}
            alt="na"
          /></Link>
        
      </div>
    </div>
  );
};

export default PokemonPreview;
