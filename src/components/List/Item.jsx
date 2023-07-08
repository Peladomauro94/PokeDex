import '../List/index.css'
import React from 'react'

function Item( { quality, isLoading } ) {


  return (
    <div className={`list-item-container ${quality.types[0].type.name}`}>
      {(quality) && 
      <>
        <span className={`list-item-number ${quality.types[0].type.name}`}>#{quality.id}</span>
        <img src={quality.sprites.other?.['official-artwork'].front_default} alt="" className='list-item-image' />
        <div className={`list-item-container__name ${quality.types[0].type.name}`}>
            <span className='list-item-name'>{quality.name.charAt(0).toUpperCase() + quality.name.slice(1)}</span>
        </div>
      </>
}
    </div>
  )
}

export default Item;