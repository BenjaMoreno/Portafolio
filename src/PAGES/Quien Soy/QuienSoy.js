import React from "react";
import "./QuienSoy.css";
import foto_hero from "../../IMAGES/generales/foto-hero.jpg";

export const QuienSoy = () => {
  return (
    <div className="Hero">
      <img className="foto-hero" />
      <div className="container-texto-hero">
        <h1>Benjamin Moreno</h1>
        <h2>Desarrollador Frontend</h2>
        {/* <a href="" className="cv-descarga">Descargar CV</a> */}
      </div>
    </div>
  );
};
