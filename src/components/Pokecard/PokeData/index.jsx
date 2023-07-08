import "./index.css";
import PokeDataItem from "./PokeDataItem/index";
import { useState, useEffect } from "react";

const PokeData = ({ qualities, pokeDexNumber }) => {

  if (qualities.length === 0 || !qualities[pokeDexNumber]) {
   
    return null;
  }


  const [speciesData, setSpeciesData] = useState([]);

  useEffect(() => {
    const fetchSpeciesData = async () => {
      if (qualities.length === 0) return;
      const speciesUrl = qualities[pokeDexNumber]?.species?.url;
      if (!speciesUrl) return;
      const response = await fetch(speciesUrl);
      const responseData = await response.json();
      setSpeciesData(responseData);
    };
    fetchSpeciesData();
  }, [qualities, pokeDexNumber]);

  const searchDexEngValue = () => {
    const flavorTextEntries = speciesData?.flavor_text_entries || [];
    for (let i = 0; i < flavorTextEntries.length; i++) {
      const entry = flavorTextEntries[i];
      if (entry.language.name === "en") {
        return entry.flavor_text;
      }
    }
    return "";
  };

  useEffect(() => {
    if (speciesData.length > 0) {
      console.log("llegan los datos");
    }
  }, [speciesData]);

  const aboutType = `pokedata-title-${qualities[pokeDexNumber]?.types[0]?.type?.name}`;
  const flavorText = searchDexEngValue();
  console.log(`el valor es ${qualities[pokeDexNumber].weight}`);

  if (qualities.length === 0 || speciesData.length === 0) {
    console.log("no llegan los datos");
    return null;
  }

  return (
    <>
      <div className="pokedata-container">
        <p className={`pokedata-title ${aboutType}`}>About</p>
        <div className="pokedata-container-components">
          <PokeDataItem
            value1={qualities[pokeDexNumber].weight}
            measure1="kg"
            description="weight"
          />
          <div className="pokedata-between_component_line"></div>
          <PokeDataItem
            value1={qualities[pokeDexNumber].height}
            measure1="m"
            description="height"
          />
          <div className="pokedata-between_component_line"></div>
          <PokeDataItem
            value1={qualities[pokeDexNumber].abilities[0]?.ability?.name}
            value2={qualities[pokeDexNumber].abilities[1]?.ability?.name}
            description="Abilities"
          />
        </div>
        <p className="pokedata-pokedex_description">{flavorText}</p>
      </div>
    </>
  );
};

export default PokeData;
