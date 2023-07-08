import React from "react";
import "./index.css";
import PokeStatsItem from "./PokeStatsItems/index";

const PokeStats = ({ qualities, pokeDexNumber }) => {
  const typeClass = `pokestats-title-${qualities[pokeDexNumber]?.types[0]?.type?.name}`;
  const statATK = Number(qualities[pokeDexNumber]?.stats[1]?.base_stat);
  const statDEF = Number(qualities[pokeDexNumber]?.stats[2]?.base_stat);
  const statSATK = Number(qualities[pokeDexNumber]?.stats[3]?.base_stat);
  const statSDEF = Number(qualities[pokeDexNumber]?.stats[4]?.base_stat);
  const statVEL = Number(qualities[pokeDexNumber]?.stats[5]?.base_stat);
  const statHP = Number(qualities[pokeDexNumber]?.stats[0]?.base_stat);

  const typeColorHandler = (typeClass) => {
    switch (typeClass) {
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

  const colorType = typeColorHandler(
    qualities[pokeDexNumber]?.types[0]?.type?.name
  );
  console.log(
    `el valor de typeClass es ${typeClass} y El valor de colorTYpe es ${colorType}`
  );

  return (
    <>
      <div className="pokestats-container">
        <div className="pokestats-container-inner">
          <p className={`pokestats-title ${typeClass}`}>Base Stats</p>
          <div className="pokestats-components-container">
            <PokeStatsItem
              pokeDexNumber={pokeDexNumber}
              qualities={qualities}
              statName="ATK"
              statValue={statATK}
              statColor={colorType}
            />
            <PokeStatsItem
              pokeDexNumber={pokeDexNumber}
              qualities={qualities}
              statName="DEF"
              statValue={statDEF}
              statColor={colorType}
            />
            <PokeStatsItem
              pokeDexNumber={pokeDexNumber}
              qualities={qualities}
              statName="SATK"
              statValue={statSATK}
              statColor={colorType}
            />
            <PokeStatsItem
              pokeDexNumber={pokeDexNumber}
              qualities={qualities}
              statName="SDEF"
              statValue={statSDEF}
              statColor={colorType}
            />
            <PokeStatsItem
              pokeDexNumber={pokeDexNumber}
              qualities={qualities}
              statName="VEL"
              statValue={statVEL}
              statColor={colorType}
            />
            <PokeStatsItem
              pokeDexNumber={pokeDexNumber}
              qualities={qualities}
              statName="HP"
              statValue={statHP}
              statColor={colorType}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PokeStats;
