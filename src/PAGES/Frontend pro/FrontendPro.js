import React, { useEffect } from "react";
import "./FrontendPro.css";
import { ReactComponent as Flecha } from "../../IMAGES/SVG/FLECHA-ANIMADA.svg";
import { Apis } from "../../COMPONENTES/frontend pro/APIS/Apis";
import { Gestion } from "../../COMPONENTES/frontend pro/GESTION DE ESTADO/Gestion";
import { ComposR } from "../../COMPONENTES/frontend pro/COMPOS REUTILIZABLES/ComposR";
import { Bibliotecas } from "../../COMPONENTES/frontend pro/BIBLIOTECAS/Bibliotecas";
import { Optimizacion } from "../../COMPONENTES/frontend pro/OPTIMIZACION/Optimizacion";
import { Formulario } from "../../COMPONENTES/frontend pro/FORMULARIOS/Formulario";
export const FrontendPro = () => {
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
  return (
    <div className="container-pro">
      <div className="titulo-pro">
        <h1>
          Conoce mis habilidades y servicios como desarrollador de Frontend
        </h1>
        <Flecha className="flecha-animada" />
      </div>
      <h2 className="h2-habilidades">Validaciónes</h2>
      <Formulario />
      {/* <hr className="separador-secciones"></hr> */}
      <h2 className="h2-habilidades">Manejo de estado global</h2>
      <Gestion />
      {/* <hr className="separador-secciones"></hr> */}
      <h2 className="h2-habilidades">Componentes reutilizables</h2>
      <ComposR />
      {/* <hr className="separador-secciones"></hr> */}
      <h2 className="h2-habilidades">API REST</h2>
      <Apis />
      {/* <hr className="separador-secciones"></hr> */}
      <h2 className="h2-habilidades">Bibliotecas</h2>{" "}
      {/* <hr className="separador-secciones"></hr> */}
      {/* <hr className="separador-secciones"></hr>
      <ComposR />
      // <hr className="separador-secciones"></hr>

      <Apis />
      // <hr className="separador-secciones"></hr>
      <Formulario />
      // <hr className="separador-secciones"></hr>
      <Bibliotecas />
      <hr className="separador-secciones"></hr> */}
      {/* <Optimizacion /> */}
    </div>
  );
};
