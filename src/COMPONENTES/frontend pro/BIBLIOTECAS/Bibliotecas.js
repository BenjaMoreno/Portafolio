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
        <NavLink to={"grafico"}>Gráficos interactivos</NavLink>
        <NavLink to={"tarjetas"}>Tarjetas</NavLink>
        <NavLink to={"modales"}>Ventanas emergentes</NavLink>
        <NavLink to={"dropdown"}>Menús desplegables</NavLink>
        <NavLink to={"spinners"}>Indicadores de carga</NavLink>
      </div>
      <div className="respuesta-link-biblio">
        <Outlet />
      </div>
    </section>
  );
};
