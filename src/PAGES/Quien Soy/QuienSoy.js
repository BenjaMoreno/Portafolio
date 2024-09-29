import React from "react";
import "./QuienSoy.css";
import { Stack } from "./Secciones/Stack";
import { SobreMi } from "./Secciones/SobreMi";

export const QuienSoy = () => {
  return (
    <div className="container-quiensoy">
      <div className="Hero">
        <img className="foto-hero" />
        <div className="container-texto-hero">
          <h1>Benjamin Moreno</h1>
          <h2>Desarrollador Frontend</h2>
          {/* <a href="" className="cv-descarga">Descargar CV</a> */}
        </div>
      </div>
      <SobreMi/>
      <Stack/>
    </div>
  );
};
