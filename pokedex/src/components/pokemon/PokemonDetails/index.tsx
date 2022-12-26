import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { Pokemon, RootState } from "../../../store/types";
import CurrentPokemon from "../CurrentPokemon";

const PokemonDetails: React.FC = () => {
  const { id } = useParams();
  const pokemons: Pokemon[] = useSelector((state: RootState) => state.pokemons);
  const [pokemon] = pokemons.filter((p: Pokemon) => Number(id) === p.id);

  console.log(Number(id));
  console.log(pokemon);
  console.log(pokemons);

  return (
    <div className="pokemon-details">
      <h1>Pokemon: id = {id}</h1>
      <div>
        {pokemon === undefined ? null : (
          <div className="pokemon-details__attribute">
            <div>Todo: finishing this ... </div>
            <div>Name:{pokemon.id} </div>
            <div>Name:{pokemon.name} </div>
          </div>
        )}
      </div>
      <CurrentPokemon />

      <div className="profile-col">
        <Link to={"/"}> Back to Search Page</Link>
      </div>
    </div>
  );
};

export default PokemonDetails;
