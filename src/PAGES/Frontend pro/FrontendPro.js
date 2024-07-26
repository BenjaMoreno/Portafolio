import React from "react";
import "./FrontendPro.css";
import { ReactComponent as Flecha } from "../../IMAGES/SVG/FLECHA-ANIMADA.svg";
export const FrontendPro = () => {
  // DESACTIVAR FLECHA ANIMADA
  window.addEventListener('scroll',function(){
    var flecha=document.querySelector('.flecha-animada');
    flecha.style.display=window.scrollY > 500 ? 'none' : 'block'
  })
  return (
    <div className="container-pro">
      <h1 className="titulo-pro">
        <span>Conoce mis habilidades y servicios como desarrollador de Frontend</span>
        <Flecha className="flecha-animada" />
      </h1>
    </div>
  );
};
