import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useSelector } from "react-redux";
import type { Pokemon, RootState } from "../../../store/types";

const PokemonCarousel: React.FC = () => {
  const pokemons: Pokemon[] = useSelector((state: RootState) => state.pokemons);

  return (
    <div className="carousel">
      <div className="carousel__col">
        <div className="carousel__title">
          <h3>Searched History</h3>
        </div>
        <Carousel
          showThumbs={true}
          thumbWidth={200}
          className="carousel__carousel"
        >
          {pokemons.map((p) => (
            <div key={p.id}>
              <p className="carousel__label">-- id : {p.id} --</p>
              <div className="carousel__carousel--image">
                <img
                  width="250px"
                  height="250px"
                  src={p.sprites.back_default}
                  alt="na"
                />
              </div>
              <p className="carousel__label"> -- name: {p.name} --</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};


export default PokemonCarousel;