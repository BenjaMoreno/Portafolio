import React, { useEffect } from "react";
import "./FrontendPro.css";
import { ReactComponent as Flecha } from "../../IMAGES/SVG/FLECHA-ANIMADA.svg";
import { Apis } from "../../COMPONENTES/frontend pro/APIS/Apis";
import { Gestion } from "../../COMPONENTES/frontend pro/GESTION DE ESTADO/Gestion";
import { ComposR } from "../../COMPONENTES/frontend pro/COMPOS REUTILIZABLES/ComposR";
import { Optimizacion } from "../../COMPONENTES/frontend pro/OPTIMIZACION/Optimizacion";
import { Formulario } from "../../COMPONENTES/frontend pro/FORMULARIOS/Formulario";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import Bibliotecas from "../../COMPONENTES/frontend pro/BIBLIOTECAS/Bibliotecas";

export const FrontendPro = () => {
  const location = useLocation();
  // DESACTIVAR FLECHA ANIMADA
  useEffect(() => {
    const detectarScroll = () => {
      var flecha = document.querySelector(".flecha-animada");
      if (flecha) {
        flecha.style.display = window.scrollY > 200 ? "none" : "block";
      }
    };
    window.addEventListener("scroll", detectarScroll);
    // LIMPIAR FUNCION
    return () => {
      window.removeEventListener("scroll", detectarScroll);
    };
  }, []);
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className="container-pro">
      <div className="titulo-pro">
        <h1>
          Conoce mis habilidades y servicios como desarrollador de Frontend
        </h1>
        <Flecha className="flecha-animada" />
      </div>
      {/* <hr className="separador-secciones"></hr> */}
      <h2 className="h2-habilidades">Elementos para tu proyecto</h2>
      <Bibliotecas />
      <h2 className="h2-habilidades">Validaciónes</h2>
      <Formulario />
      <h2 className="h2-habilidades">API REST</h2>
      <Apis />
      <h2 className="h2-habilidades">Componentes reutilizables</h2>
      <ComposR />
      <h2 className="h2-habilidades" id="gestion">
        Manejo de estado global
      </h2>
      <Gestion />
      {/* <Optimizacion /> */}
    </div>
  );
};
