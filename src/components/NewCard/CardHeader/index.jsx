import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function CardHeader({ pokemon, shiny, isShinyActive}) {
 
   const idHandler = (id) => {
      if (id < 10) {
        return "00";
      } else if (id >= 10 && id < 100) {
        return "0";
      }
    };

  return (
  
         <div className="pokecard__header">
             <div className="pokecard__header-left">
                <button className="pokecard__header-arrow"><Link to="/">
                <img className="pokecard__header-arrow-img" src="/practiceimgs/arrow-left.svg" alt="" />
              </Link></button>
                <span className="pokecard__header-name">{pokemon.species?.name.charAt(0).toUpperCase() + pokemon.species?.name.slice(1)}</span>
             </div>
             <div className="pokecard__header-right">
                <img onClick={shiny} className={`pokecard__header-shiny ${isShinyActive === false ? 'pokename-button_shiny-on': 'pokename-button_shiny-off'}`} src="/practiceimgs/shinyIcon.png" alt="" />
                <span className="pokecard__header-number">#{idHandler(pokemon.id)}{pokemon.id}</span>
             </div>             
         </div>
                 
  );
}

export default CardHeader;