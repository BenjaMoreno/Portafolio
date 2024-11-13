import React from "react";
import "./QuienSoy.css";
import { Stack } from "./Secciones/Stack";
import { SobreMi } from "./Secciones/SobreMi";
import { Experiencia } from "./Secciones/Experiencia";
import { Certificados } from "./Secciones/Certificados";
import foto from "../../IMAGES/generales/hero-foto.png";
import { ReactComponent as Github } from "../../IMAGES/SVG/GITHUB.svg";
import { Link } from "react-router-dom";
export const QuienSoy = () => {
  return (
    <div className="container-quiensoy">
      <div className="Hero">
        <img className="foto-hero" src={foto} />
        <div className="container-texto-hero">
          <h1>Benjamin Moreno</h1>
          <h2>Desarrollador Frontend</h2>
          <div className="container-descarga">
            <a href="" className="cv-descarga">
              Descargar CV
            </a>
            <a
              href="https://github.com/BenjaMoreno"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Benjamin Moreno"
            >
              <Github className="logo-gith" />
            </a>
          </div>
        </div>
      </div>
      <SobreMi />
      <Experiencia />
      <Stack />
      <Certificados />
    </div>
  );
};
