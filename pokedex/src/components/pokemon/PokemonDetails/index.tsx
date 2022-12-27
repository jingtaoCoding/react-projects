import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { Pokemon, RootState } from "../../../store/types";
import CurrentPokemon from "../CurrentPokemon";
import "../../styles.css";

const PokemonDetails: React.FC = () => {
  const { id } = useParams();
  const pokemons: Pokemon[] = useSelector((state: RootState) => state.pokemons);
  const [pokemon] = pokemons.filter((p: Pokemon) => Number(id) === p.id);

  console.log(Number(id));
  console.log(pokemon);
  console.log(pokemons);

  return (
    <div className="pokemon-details">
      <h1>{pokemon ? pokemon.name : null}</h1>
      <div className="pokemon-details__attribute">
        <span className="badge">ID: {pokemon.id} </span>
        <span>Weight:{pokemon.weight} </span>
        <span>Height:{pokemon.height} </span>
      </div>

      <div>Todo: finishing this ... </div>

      <div>
        {pokemon === undefined ? null : (
          <div className="pokemon-details__image">
            <img
              width="100%"
              height="200px"
              src={pokemon.sprites.other.dream_world.front_default}
              alt="na"
            />
          </div>
        )}
      </div>

      <div className="profile-col">
        <Link to={"/"}> Back to Search Page</Link>
      </div>
    </div>
  );
};

export default PokemonDetails;
