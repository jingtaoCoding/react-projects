import React from "react";
import { useSelector } from "react-redux";
import type {RootState } from "../../../store/types";

import "../../styles.css";

const SinglePokemon: React.FC = () => {
  const curPokemon: any = useSelector(
    (state: RootState) => state.currentPokemon
  );
  console.log("singlePokemon: ", curPokemon);

  return "id" in curPokemon ? (
    <div className="single-pokemon">
      <div className="single-pokemon__profile">
        <div className="single-pokemon__profile--image">
          <img
            width="100%"
            height="250px"
            src={curPokemon.sprites.back_default}
            alt="na"
          />
        </div>
        <div className="single-pokemon__profile--details">
          <div className="profile-col">
            <div className="profile-row__attribute">
              <span className="attribute-title">Name</span>
              <span className="attribute-value">{curPokemon.name} </span>
            </div>
            <div className="profile-row__attribute">
              <span className="attribute-title">ID</span>
              <span className="attribute-value">{curPokemon.id} </span>
            </div>
            <div className="profile-row__attribute">
              <span className="attribute-title">Height</span>
              <span className="attribute-value">{curPokemon.height} </span>
            </div>
            <div className="profile-row__attribute">
              <span className="attribute-title">Weight</span>
              <span className="attribute-value">{curPokemon.weight} </span>
            </div>
          </div>
          <div className="profile-col">More details</div>
        </div>
      </div>
    </div>
  ) : null;
};

export default SinglePokemon;
