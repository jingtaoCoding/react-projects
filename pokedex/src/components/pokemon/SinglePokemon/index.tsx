import React from "react";
import { useSelector } from "react-redux";

import type { Pokemon } from "../../../store/types"
import { selectPokemon } from "../../../store/slices/currentPokemon";

interface RootState {
  currentPokemon: Pokemon | {};
}

const SinglePokemon = () => {
  const curPokemon: any = useSelector((state: RootState) => state.currentPokemon);
  console.log("singlePokemon: ", curPokemon);

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
