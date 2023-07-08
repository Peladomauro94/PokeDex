import React from "react";
import "./index.css";
import CardDataItems from "./CardDataItems";
import CardStats from "../CardStats";

function CardData({ pokemon, pokeType, speciesText }) {
 
  if (!pokemon || pokemon.length === 0) {
    return null; // Manejo del estado inicial mientras se obtienen los datos
  }

  const ability = pokemon?.abilities[0]?.ability?.name.charAt(0).toUpperCase() + pokemon?.abilities[0]?.ability?.name.slice(1)

  return (
    
                <div className="card-data__total-container">
                    <span className={`card-data__about text-${pokeType}`}>About</span>
                    <div className="card-data__items-container">
                        <CardDataItems classCont="card-data-items__data-text" dataImg="/practiceimgs/peso.png" dataText={`${pokemon.weight} kg`} dataFeature="Weight"/>
                        <CardDataItems classCont="card-data-items__data-text center-block" dataImg="/practiceimgs/Height.svg" dataText={`${pokemon.height} m`} dataFeature="Height"/>
                        <CardDataItems classCont="card-data-items__data-text" dataImg="" dataText={ability} dataFeature="Abilities"/>    
                    </div>
                    <p className="card-data-items__description">{speciesText.flavor_text_entries[1].flavor_text}</p>
                    <span className={`card-stats__title text-${pokeType}`}>Base Stats</span>
                    <CardStats pokemon={pokemon} pokeType={pokeType}/>
                </div>

                 
    
  );
}

export default CardData;