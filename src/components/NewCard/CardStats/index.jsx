import React from "react";
import "./index.css";
import CardStatsItems from "./CardStatsItems";


function CardStats({ pokemon, pokeType }) {
 
  if (!pokemon || pokemon.length === 0) {
    return null; // Manejo del estado inicial mientras se obtienen los datos
  }

  const statATK = Number(pokemon && pokemon.stats && pokemon.stats[1] && pokemon.stats[1].base_stat );
  const statDEF = Number(pokemon && pokemon.stats && pokemon.stats[2] && pokemon.stats[2].base_stat);
  const statSATK = Number(pokemon && pokemon.stats && pokemon.stats[3] && pokemon.stats[3].base_stat);
  const statSDEF = Number(pokemon && pokemon.stats && pokemon.stats[4] && pokemon.stats[4].base_stat);
  const statVEL = Number(pokemon && pokemon.stats && pokemon.stats[5] && pokemon.stats[5].base_stat);
  const statHP = Number(pokemon && pokemon.stats && pokemon.stats[0] && pokemon.stats[0].base_stat);

  
  const typeColorHandler = (pokeType) => {
    switch (pokeType) {
      case "grass":
        return "#7AC74C";
      case "normal":
        return "#A8A77A";
      case "fire":
        return "#EE8130";
      case "water":
        return "#6390F0";
      case "electric":
        return "#F7D02C";
      case "ice":
        return "#96D9D6";
      case "fighting":
        return "#C22E28";
      case "poison":
        return "#A33EA1";
      case "ground":
        return "#E2BF65";
      case "flying":
        return "#A98FF3";
      case "psychic":
        return "#F95587";
      case "bug":
        return "#A6B91A";
      case "rock":
        return "#B6A136";
      case "ghost":
        return "#735797";
      case "dragon":
        return "#6F35FC";
      case "dark":
        return "#705746";
      case "steel":
        return "#B7B7CE";
      case "fairy":
        return "#D685AD";
      default:
        return ""; // Coloca un color predeterminado o deja en blanco si no hay coincidencia
    }
  };



  return (
    
                <div className="card-stats__total-container">
                        <CardStatsItems statName={"ATK"} statValue={statATK} statColor={typeColorHandler} pokeType={pokeType}/>
                        <CardStatsItems statName={"DEF"} statValue={statDEF} statColor={typeColorHandler} pokeType={pokeType}/>
                        <CardStatsItems statName={"STAK"} statValue={statSATK} statColor={typeColorHandler} pokeType={pokeType}/>
                        <CardStatsItems statName={"SDEF"} statValue={statSDEF} statColor={typeColorHandler} pokeType={pokeType}/>
                        <CardStatsItems statName={"VEL"} statValue={statVEL} statColor={typeColorHandler} pokeType={pokeType}/>
                        <CardStatsItems statName={"HP"} statValue={statHP} statColor={typeColorHandler} pokeType={pokeType}/>
                </div>
    
  );
}

export default CardStats;