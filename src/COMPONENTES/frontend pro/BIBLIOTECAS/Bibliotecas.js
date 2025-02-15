import React from "react";
import "./Bibliotecas.css";
import { NavLink, Outlet } from "react-router-dom";
export const TestDom = () => {
  return <div>Testing links react router dom</div>;
};

export const Bibliotecas = () => {
  return (
    <section className="container-bibliotecas">
      <div className="links-biblio">
        <NavLink to={"grafico"}>Visualización de datos</NavLink>
        <NavLink to={"tarjetas"}>Tarjetas</NavLink>
        <NavLink to={"modales"}>Modales</NavLink>
        <NavLink to={"dropdown"}>Dropdowns</NavLink>
        <NavLink to={"spinners"}>Spinners</NavLink>
      </div>
      <div className="respuesta-link-biblio">
        <Outlet />
      </div>
    </section>
  );
};
