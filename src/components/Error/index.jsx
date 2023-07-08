import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='container'>
        <div className='container-text'>
            <span className='error-number'>404</span>
            <span className='error-text'>¡Ha occurrido un error inesperado!</span>
            <span className='error-text'>Prueba volver a la página de inicio.</span>
            <Link to={"/"} className='error-button'>Inicio</Link>
        </div>
    </div>
  )
}

export default Error