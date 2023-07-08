import React from "react";
import { useState, useEffect } from "react";
import PokeBackground from "./PokeBackground/index";
import PokeName from "./PokeName/index";
import PokeImg from "./PokeImg/index";
import PokeData from "./PokeData/index";
import PokeStats from "./PokeStats/index";
import { useParams } from "react-router-dom";

function Pokecard({}) {
  const {number} = useParams();
  const [pokemons, setPokemons] = useState([]);
  const [qualities, setQualities] = useState([]);
  const numberCorrected = Number(number)-1;
  const [isShinyActive, setIsShinyActive] = useState(false);
  const [isLoading, setIsLoading] = useState("")

  const toggleShinyActive = () => {
    setIsShinyActive((prev) => !prev);
  };


  const getPokemons = async () => {
    try{
      setIsLoading(true)
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=500"
    );
    const responseData = await response.json();
    setPokemons(responseData.results);

    const qualitiesResponseData = await Promise.all(
      responseData.results.map(async (pokemon) => {
        const response = await fetch(`${pokemon.url}`);
        return await response.json();
      })
    );
    setQualities(qualitiesResponseData);
  } catch (error){
    return <Error to="/error"/>
  } finally {
    setIsLoading(false)
  }};

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <>
            {isLoading ? (
          <p>Loading...</p>
        ) :
                (<>
                <PokeBackground pokeDexNumber={numberCorrected} qualities={qualities}></PokeBackground>
                <PokeName   isShinyActive={isShinyActive} toggleShinyActive={toggleShinyActive} pokeDexNumber={numberCorrected} qualities={qualities}></PokeName>
                <PokeImg  isShinyActive={isShinyActive} pokeDexNumber={numberCorrected} qualities={qualities}></PokeImg>
                <PokeData pokeDexNumber={numberCorrected} qualities={qualities}></PokeData>
                <PokeStats pokeDexNumber={numberCorrected} qualities={qualities}></PokeStats>
                </>
            )}

    </>
  );
}

export default Pokecard;
