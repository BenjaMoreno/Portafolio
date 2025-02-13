import React from "react";
import "./Bibliotecas.css";
import NavbarB from "./BOOSTRAP COMPONENTS/NavbarB";
import Tarjeta from "./BOOSTRAP COMPONENTS/Tarjeta";
import DropdownB from "./BOOSTRAP COMPONENTS/DropdownB";
import Carrusel from "./BOOSTRAP COMPONENTS/Carrusel";
import Spinners from "./BOOSTRAP COMPONENTS/Spinners";
import Botones from "./BOOSTRAP COMPONENTS/Botones";

export const Bibliotecas = () => {
  return (
    <section className="container-bibliotecas">
      {/* <h1 className="titulo-bibliotecas ">Uso de Bibliotecas</h1> */}
      {/* <article className="grid-container-bibliotecas">
        <div className="navbar-bs biblio-item">
          <NavbarB />
        </div>
        <div className="carrusel-bs biblio-item">
          <Carrusel />
        </div>
        <div className="tarjeta-bs biblio-item">
          <Tarjeta />
        </div>
        <div className="spinners-bs biblio-item">
          <Spinners />
        </div>
        <div className="dropdown-bs biblio-item">
          <DropdownB />
        </div>
        <div className="btns-bs biblio-item">
          <Botones />
        </div>
      </article> */}
    </section>
  );
};
