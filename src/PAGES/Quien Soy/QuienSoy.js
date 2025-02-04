import React from "react";
import "./QuienSoy.css";
import { Stack } from "./Secciones/Stack";
import { SobreMi } from "./Secciones/SobreMi";
import { Experiencia } from "./Secciones/Experiencia";
import { Certificados } from "./Secciones/Certificados";
import foto from "../../IMAGES/generales/hero-foto.png";
import { ReactComponent as Github } from "../../IMAGES/SVG/GITHUB.svg";
export const QuienSoy = () => {
  return (
    <div className="container-quiensoy">
      <div className="Hero">
        <img className="foto-hero" src={foto} alt="Foto del desarrollador" />
        <div className="container-texto-hero">
          <h1>Benjamin Moreno</h1>
          <h2>Desarrollador Frontend</h2>
          <div className="container-descarga">
            <a
              href="https://github.com/BenjaMoreno"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Benjamin Moreno"
            >
              <Github className="logo-gith" />
            </a>
            <a
              href="/BenjaminMorenoCV.pdf"
              download="BenjaminMorenoCV.pdf"
              className="cv-descarga"
              target="_blank"
              onClick={(e) => {
                e.preventDefault(); // Prevenimos el comportamiento por defecto del enlace
                window.open("/BenjaminMorenoCV.pdf", "_blank"); // Abre en nueva pestaña
                e.target.click(); // Inicia la descarga
              }}
            >
              Descargar y Ver CV
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
