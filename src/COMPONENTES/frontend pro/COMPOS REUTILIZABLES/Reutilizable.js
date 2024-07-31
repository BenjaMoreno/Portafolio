import React from 'react';
import './Reutilizable.css';

export const Reutilizable = ({estilo}) => {
  return (
    <div className='compo' style={{backgroundColor:estilo.fondo}}>
        <div className='nombre-compo'>
            Componente Reutilizable {estilo.numero}
        </div>
        <div className='container-emoji'>
            <img src={estilo.emoji}/>
        </div>
    </div>
  )
}
