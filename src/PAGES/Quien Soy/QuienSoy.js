import React, { useEffect, useState } from "react";
import "./QuienSoy.css";
import { Stack } from "./Secciones/Stack";
import { SobreMi } from "./Secciones/SobreMi";
import { Experiencia } from "./Secciones/Experiencia";
import { Certificados } from "./Secciones/Certificados";
import foto from "../../IMAGES/generales/WhatsApp Image 2025-03-31 at 9.07.02 PM.jpeg";
import { ReactComponent as Github } from "../../IMAGES/SVG/GITHUB.svg";
import { Box, Typography } from "@mui/material";

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
        <Box
          sx={{
            // border: "solid #57d7d7 1px",
            // border: "solid #2563EB 9px",

            // height: "max-content",
            // width: "25vw",
            // maxHeight: "25vh",
            // height: "auto",
            // width: "auto",
            // maxWidth: "70vw",
            borderRadius: "20px",
            overflow: "hidden",
            // boxShadow: "0 0 30px lightblue",
            width: {
              xs: "auto",
              sm: "30vw",
              md: "30vw",
              lg: "25vw",
              xl: "25vw",
            },
            height: {
              xs: "35vh",
              sm: "auto",
              md: "auto",
              lg: "auto",
              xl: "auto",
            },
          }}
        >
          <img src={foto} alt="" className="foto-hero" loading="eager" />
        </Box>
        <div className="container-texto-hero">
          <Typography
            variant="h2"
            sx={{
              fontWeight: {
                xs: 700,
                sm: 300,
                md: 300,
                lg: 300,
                xl: 300,
              },
              fontSize: {
                xs: "1rem !important",
                sm: "1rem !important",
                md: "1.8rem !important",
                lg: "1.8rem !important",
                xl: "2rem !important",
              },
              fontFamily: "var(--fuente-poopins)",
              alignSelf: "",
            }}
          >
            {texto}
            <span style={{ animation: "blink 1s infinite" }}>|</span>
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontWeight: {
                xs: "800",
                sm: "700",
                md: "700",
                lg: "700",
                xl: "700",
              },
              fontSize: {
                xs: "2.4rem !important",
                sm: "3rem !important",
                md: "4rem !important",
                lg: "6rem !important",
                xl: "8rem !important",
              },
            }}
          >
            <Typography variant="span" sx={{ color: "#2563EB" }}>
              Front
            </Typography>
            end <br />
            Developer
          </Typography>
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
