import React, { useState } from 'react';
import Ball from '/practiceimgs/Pokeball.png';
import Arrow from '/practiceimgs/Arrow.svg';
import './index.css';


const Header = ({ searchValue, handleSearchChange, pokemonSort, buttonSymbol }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <header className='header'>
      <div className='header-logo-filter'>
        <div className="header-logo">
          <img className="header-logo-img" src={Ball} alt="Logo de la aplicación" />
          <h1 className='header-logo-title'>Pokédex</h1>
        </div>
        <button className='header-filter' onClick={pokemonSort}>
          <div>
            <p className='header-filter-symbol'>{buttonSymbol}</p>
          </div>
          <img className='header-filter-arrow' src={Arrow} alt="" />
        </button>
      </div>
      <div className="header-search">
        <form className={`header-search-form ${isFocused ? 'focused' : ''}`}>
          <input
            placeholder='🔍  Buscar'
            className='header-search-bar'
            type="text"
            name="search"
            value={searchValue}
            onChange={handleSearchChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </form>
      </div>
    </header>
  );
};

export default Header;