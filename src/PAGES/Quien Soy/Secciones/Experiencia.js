import React from "react";
import "./Experiencia.css";
import { ReactComponent as Exper } from "../../../IMAGES/SVG/EXPERIENCIA.svg";
export const Experiencia = () => {
  return (
    <section className="container-experiencia">
      <span>
        <Exper className="user" />
        Experiencia
      </span>
      <section className="grid-container-experiencia">
        <div className="trabajo">
          <div className="fecha"></div>
        </div>
        <div className="trabajo">
          <div className="fecha"></div>
        </div>
      </section>
    </section>
  );
};
