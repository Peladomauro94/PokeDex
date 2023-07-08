import React from 'react'
import Item from './Item';
import "./TypeColors.css"
import { Link } from 'react-router-dom';

function List({ qualities, filteredButtons, searchValue, sortType, currentPage, setCurrentPage, totalPages, isLoading } ) {
  
  const SORT_TYPE = {
    az: (a, b) => (a.name < b.name) ?  -1 :  1 ,
    nu:(a, b) =>  (a.id < b.id) ? -1 : 1 
  }

  const filteredData = qualities.filter((item) => {
    if (filteredButtons === "all"){
      return true;
    } else {
      return item.types.some(type => type.type.name === filteredButtons);
    }
    
  });

  const searchFilter = filteredData.filter((pokemon) =>{
    if (searchValue === ""){
      return true;
     } else {
      return pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
     }
    })

  const allFilters = (item) => {
    if (filteredButtons === "all" && searchValue === "") {
      return  true
    } else if (searchValue !== "" && filteredButtons === "all"){
      return item.name.toLowerCase().includes(searchValue.toLowerCase())
    } else if (filteredButtons !== "all" && searchValue === ""){
      return item.types.some(type => type.type.name === filteredButtons);
    } else if (searchValue !== "all" && searchValue !== "") {
      return item.name.toLowerCase().includes(searchValue.toLowerCase()) && item.types.some(type => type.type.name === filteredButtons);
    }
  }

  
      
  
  return (
    
    <div className='list-container'>
      <div className='list-pokemon-container'>
        {isLoading && (
          <div className='cargando-container'>          
            <img className="cargando-img" src="/cargando-img.png" alt="" />
            <img className='loading-img' src='/loading-img.png' />
          </div>

        )}

        {(qualities) && 
           searchFilter.filter(allFilters).sort(SORT_TYPE[sortType]).map((pokemon, index) => (
            <Link className='list-link' to={`/pokecard/${pokemon.id}`}><Item key={index} quality={pokemon}/></Link>))}
      </div>

      <div className='list-page-buttons-container'>
        {(currentPage > 1) ? <button className='list-page-button' onClick={() => (currentPage >= 2) && setCurrentPage( currentPage - 1)}>Anterior</button> : false }
        {(currentPage < totalPages ) ? <button className='list-page-button' onClick={() => (currentPage < totalPages) && setCurrentPage(  currentPage + 1)} >Siguiente</button> : false}
      </div>
      
    </div>
    
  )
}

export default List;