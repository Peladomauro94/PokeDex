import React from "react";
import "./index.css";

const PokeBackground = ({ qualities, pokeDexNumber }) => {
  console.log(`el valor en el background es ${pokeDexNumber}`)
  if (qualities.length === 0) {
    console.log("no llegan los datos");
    return null; // Manejo del estado inicial mientras se obtienen los datos
  } else {
    console.log("llegan los datos");
    
  }
  const typeClass = `pokebackground-container-${qualities[pokeDexNumber]?.types[0]?.type?.name}`;
  console.log(typeClass);

  return (
    <div className="pokebackground-container-general">
      <div className={`pokebackground-container-inner ${typeClass}`}>
        <div className="pokebackground-img-container">
          <div className="pokebackground-img"></div>
        </div>
        <div className="pokebackground-white_square"></div>
      </div>
    </div>
  );
};

export default PokeBackground;
