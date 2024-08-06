import React, { useEffect } from "react";
import "./FrontendPro.css";
import { ReactComponent as Flecha } from "../../IMAGES/SVG/FLECHA-ANIMADA.svg";
import { Apis } from "../../COMPONENTES/frontend pro/APIS/Apis";
import { Gestion } from "../../COMPONENTES/frontend pro/GESTION DE ESTADO/Gestion";
import { ComposR } from "../../COMPONENTES/frontend pro/COMPOS REUTILIZABLES/ComposR";
import { Formulario } from "../../COMPONENTES/frontend pro/FORMULARIOS/Formulario";
import { Bibliotecas } from "../../COMPONENTES/frontend pro/BIBLIOTECAS/Bibliotecas";
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
      <h1 className="titulo-pro">
        <span>
          Conoce mis habilidades y servicios como desarrollador<br/> de Frontend
        </span>
        <Flecha className="flecha-animada" />
      </h1>
      <Gestion/>
      <hr className="separador-secciones"></hr>
      <ComposR/>
      <hr className="separador-secciones"></hr>

      <Apis/>

      <Formulario/>

      <Bibliotecas/>
    </div>
  );
};
