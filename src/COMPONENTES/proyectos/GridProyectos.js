import React from 'react';
import './GridProyectos.css';
import revista_sur_activo from '../../IMAGES/proyectos/revista-sur-activo.webp'
export const GridProyectos = () => {
  return (
    <article className='grid-container-proyectos'>
        <figure>
            <img src={revista_sur_activo} alt="" />
            <figcaption>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, perferendis.</p>
                <a>Visitar sitio --></a>
            </figcaption>
        </figure>
        <figure>
            <img src="" alt="" />
            <figcaption></figcaption>
        </figure>
        <figure>
            <img src="" alt="" />
            <figcaption></figcaption>
        </figure>
        <figure>
            <img src="" alt="" />
            <figcaption></figcaption>
        </figure>
        
    </article>
  )
}
