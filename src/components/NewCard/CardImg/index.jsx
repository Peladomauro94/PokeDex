import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function CardImg({ pokemon, isShinyActive, shinyReset }) {
  
  const pokePrev = Number(pokemon.id) === 1 ? 1 : pokemon.id - 1 ;
  const pokeNext = Number(pokemon.id) === 500 ? 500 : pokemon.id + 1 ;

  const type1 = pokemon && pokemon.types && pokemon.types[0] && pokemon.types[0].type && pokemon.types[0].type.name
  const type2 = pokemon && pokemon.types && pokemon.types[1] && pokemon.types[1].type && pokemon.types[1].type.name
  const none = type2 === undefined ? "pokecard__img-type-none" : ""
  
  


  return (
    <div className="pokecard__img-total-container">
      <div className="pokecard__img-container">
        <Link to={`/pokecard/${pokePrev}`} onClick={shinyReset}>
          <img
            className="pokecard__img-arrow left"
            src="/practiceimgs/arrow-left.svg"
            alt=""
          />
        </Link>
        <img
          className="pokecard__img"
          src={isShinyActive === false 
                ? pokemon.sprites?.other?.["official-artwork"]?.front_default 
                : pokemon.sprites?.other?.["official-artwork"]?.front_shiny }
          alt=""
        />
        <img
          className="pokecard__pokeball-img"
          src="/practiceimgs/Pokeball.png"
          alt=""
        />
        <Link to={`/pokecard/${pokeNext}`} onClick={shinyReset}>
          <img
            className="pokecard__img-arrow right"
            src="/practiceimgs/arrow-right.svg"
            alt=""
          />
        </Link>
      </div>

      <div className="pokeimg-type-container">
        <div className={`typeclass img-${type1}`}></div>
        <div className={`typeclass img-${type2} ${none}`}></div>
      </div>
    </div>
  );
}

export default CardImg;
