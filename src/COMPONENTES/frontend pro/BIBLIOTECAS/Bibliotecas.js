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
        <NavLink to={"dropdown"}>Dropdowns</NavLink>
        <NavLink to={""}>Graficos</NavLink>
        <NavLink to={""}>Navbar</NavLink>
        <NavLink to={""}>Cards</NavLink>
        <NavLink to={""}>Spinners</NavLink>
        <NavLink to={""}>Y más...</NavLink>
      </div>
      <div className="respuesta-link-biblio">
        <Outlet />
      </div>
    </section>
  );
};
