import React from "react";
import { useSelector } from "react-redux";

type Pokemon =
  | {
      name: string;
      age: number;
      id: number;
      sprites: { back_default?: string };
    }
  | {};
interface RootState {
  pokemon: Pokemon;
}

const SinglePokemon = () => {
  const curPokemon: Pokemon = useSelector((state: RootState) => state.pokemon);
  console.log(curPokemon);

  return "id" in curPokemon ? (
    <div>
      <li>Name: {curPokemon.name}</li>
      <li>ID: {curPokemon.id}</li>
      <li>AGE: {curPokemon.age}</li>

      <img
        width="500"
        height="600"
        src={curPokemon.sprites.back_default}
        alt="na"
      />
      <li>IMAG: {curPokemon.sprites.back_default}</li>
    </div>
  ) : null;
};

export default SinglePokemon;
