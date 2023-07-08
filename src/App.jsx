import { useParams } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import "./index.css";
import { useState, useEffect } from "react";


function App() {

    const [filteredButtons, setFilteredButtons] = useState("all");
    const [pokemons, setPokemons] = useState([]);
    const [qualities, setQualities] = useState([]);
    const [searchValue, setSearchValue] = useState ("");
    const [sortType, setSortType] = useState("nu");
    const [isLoading, setIsLoading] = useState("");
    const [buttonSymbol, setButtonSymbol] = useState("A Z");
    const [currentPage, setCurrentPage] = useState(1);
  
    const getPokemons = async () => {
      try{
      setIsLoading(true)
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=0&limit=500`
      );
      const responseData = await response.json()
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
    }

  };
    
    const handleFilteredButtons = (pokeType) => {
      setFilteredButtons(pokeType);
      
      };
  
    useEffect(() => {
      getPokemons();
    }, []);

    const handleSearchChange = (e) =>{
      const value = e.target.value;
      setSearchValue(value)
    }

    const pokemonSort = () => {
      if (sortType === "nu") {
        setSortType("az");
        setButtonSymbol("#")
      } else {
        setSortType("nu");
        setButtonSymbol("A Z");
      }
     };

     const nextPage = () => {
      setCurrentPage((currentPage < 10) && currentPage + 1)
     }

     const previousPage = () => {
      setCurrentPage((currentPage > 1) && currentPage - 1)
     }

      const itemsPerPage = 48;
      const totalItems = qualities.length;
      const totalPages = Math.ceil(totalItems / itemsPerPage)
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const visiblePokemons = qualities.slice(startIndex, endIndex);


    

  return (
    <>
      <div className="app-container">
        <img className="app-container__background-pokemon" src="/pokemon.png" alt="" />
        <img className="app-container__background-meowto" src="/meowto2.png" alt="" />
        <img className="app-container__background-meow" src="/mew.png" alt="" />
        <Header searchValue={searchValue} handleSearchChange={handleSearchChange} pokemonSort={pokemonSort} buttonSymbol={buttonSymbol}/>
        <List filteredButtons={filteredButtons} searchValue={searchValue} isLoading={isLoading} sortType={sortType} nextPage={nextPage} currentPage={currentPage} setCurrentPage={setCurrentPage} qualities={visiblePokemons}totalPages={totalPages} />
        <Footer handleFilteredButtons={handleFilteredButtons}/>
      </div>
    </>
  );
}

export default App;
