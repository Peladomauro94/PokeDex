import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardHeader from "./CardHeader";
import CardImg from "./CardImg";
import CardData from "./CardData";

function NewCard() {
 
  const {id} = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShinyActive, setIsShinyActive] = useState(false);
  const [speciesText, setSpeciesText] = useState([])


  const getPokemon = async () => {
    try{
      setIsLoading(true)
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      const responseData = await response.json()
      setPokemon(responseData);

      const spicesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
      const spicesResponseData = await spicesResponse.json()
      setSpeciesText(spicesResponseData);


  } catch (error){
    return <Error to="/error"/>
  } finally {
    setIsLoading(false)
  }};

  const pokeType = pokemon && pokemon.types && pokemon.types[0] && pokemon.types[0].type && pokemon.types[0].type.name
console.log(speciesText)

  const toggleShinyActive = () => {
    (isShinyActive === false) ? setIsShinyActive(true) : setIsShinyActive(false);
  };

  const shinyReset = () => {(isShinyActive === true) && setIsShinyActive(false)};

  useEffect(() => {
    getPokemon();
  }, [id]);

  return (
    
                <div className="pokecard__total-container">
                  {(isLoading || !pokemon || !speciesText) ? (
                      <div className='pokecard__cargando-container'>          
                          <img className="cargando-img" src="/cargando-img.png" alt="" />
                          <img className='loading-img' src='/loading-img.png' />
                      </div>
                    ) :

                    (<div className={`pokecard__card-container background-${pokeType}`}>
                        <CardHeader pokemon={pokemon} shiny={toggleShinyActive} isShinyActive={isShinyActive} shinyReset={shinyReset}/>
                        <CardImg pokemon={pokemon} isShinyActive={isShinyActive}/>
                        <CardData pokemon={pokemon} pokeType={pokeType} speciesText={speciesText}/>
                    </div>)}
                </div>
    
  );
}

export default NewCard;