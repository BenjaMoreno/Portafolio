import React from 'react';
import './PokeApi.css'

export const PokeApi = () => {
  return (
    <div className='consulta-pokemon'>
        <form className='separador-pokemon' onSubmit={''}>
            <h1>Consulta por un Pokemon</h1>
            <input placeholder='Nombre del Pókemon...'/>
            <button type='submit'> Consultar</button>
        </form>
        <div className='separador-pokemon'>
            <div className='pokemon'>
    
            </div>
        </div>
    </div>
  )
}
