import React, { useEffect, useState } from "react";
import "./QuienSoy.css";
import { Stack } from "./Secciones/Stack";
import { SobreMi } from "./Secciones/SobreMi";
import { Experiencia } from "./Secciones/Experiencia";
import { Certificados } from "./Secciones/Certificados";
import foto from "../../IMAGES/generales/WhatsApp Image 2025-03-28 at 11.24.15 PM.jpeg";
import { ReactComponent as Github } from "../../IMAGES/SVG/GITHUB.svg";
import { Typography } from "@mui/material";

export const QuienSoy = () => {
  // Efecto typewriter
  const [texto, setTexto] = useState("");
  const [indice, setIndice] = useState(0);
  const [fraseActual, setFraseActual] = useState(0);
  const [estaBorrando, setEstaBorrando] = useState(false);
  const frases = ["Buenas!", "Soy Benja"];
  const velocidadEscritura = 50;
  const velocidadBorrado = 10;
  const pausaEntreFrases = 2000; // 2 segundos

  useEffect(() => {
    const fraseCompleta = frases[fraseActual];

    if (estaBorrando) {
      // Borrar texto
      if (texto.length > 0) {
        const timeout = setTimeout(() => {
          setTexto(texto.substring(0, texto.length - 1));
          setIndice(indice - 1);
        }, velocidadBorrado);
        return () => clearTimeout(timeout);
      } else {
        // Cambiar a la siguiente frase
        setEstaBorrando(false);
        setFraseActual((fraseActual + 1) % frases.length);
      }
    } else {
      // Escribir texto
      if (indice < fraseCompleta.length) {
        const timeout = setTimeout(() => {
          setTexto(texto + fraseCompleta[indice]);
          setIndice(indice + 1);
        }, velocidadEscritura);
        return () => clearTimeout(timeout);
      } else if (texto === fraseCompleta) {
        // Pausa antes de borrar
        const timeout = setTimeout(() => {
          setEstaBorrando(true);
        }, pausaEntreFrases);
        return () => clearTimeout(timeout);
      }
    }
  }, [texto, indice, estaBorrando, fraseActual, frases]);

  return (
    <div className="container-quiensoy">
      <div className="Hero">
        <img src={foto} alt="" className="foto-hero" />
        <div className="container-texto-hero">
          <h2>
            {texto}
            <span style={{ animation: "blink 1s infinite" }}>|</span>
          </h2>
          <h1>
            <Typography variant="span" sx={{ color: "#2563EB" }}>
              Front
            </Typography>
            end <br />
            Developer
          </h1>
          <div className="container-descarga">
            <a
              href="https://github.com/BenjaMoreno"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Benjamin Moreno"
            >
              <Github className="logo-gith" />
            </a>
            <button
              href="/BenjaminMorenoCV.pdf"
              download="BenjaminMorenoCV.pdf"
              className="cv-descarga"
              target="_blank"
              onClick={(e) => {
                e.preventDefault();
                window.open("/BenjaminMorenoCV.pdf", "_blank");
                e.target.click();
              }}
            >
              Descargar CV
            </button>
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
