import React from "react";
import "./Gestion.css";
import astronaut from "../../../IMAGES/SVG/ASTRONAUT.svg";
import detective from "../../../IMAGES/SVG/DETECTIVE.svg";
import barwoman from "../../../IMAGES/SVG/BARWOMAN.svg";
import cientifica from "../../../IMAGES/SVG/CIENTIFICA.svg";
export const Gestion = () => {
  return (
    <section className="container-gestion">
      <h1 className="titulo-gestion">Gestión de Estado</h1>
      <form className="form-estado">
        <h1>Crea un usuario</h1>
        <div className="container-input-btn">
          <input placeholder="estado..." />
          <button>Crear</button>
        </div>
        <h2>Elige tu avatar</h2>
        <div className="container-avatars">
          <img src={astronaut} alt="" />
          <img src={detective} alt="" />
          <img src={barwoman} alt="" />
          <img src={cientifica} alt="" />
        </div>
      </form>
      <hr className="hr-estado" />
      <div className="resultado-estado">
        <div className="caja-flex-estado">
          Usuario:&nbsp;&nbsp;<span>Benjamin</span>
        </div>
        <div className="caja-flex-estado">
          Avatar:&nbsp;&nbsp;&nbsp;&nbsp;<img src={astronaut} alt="" />
        </div>
      </div>
    </section>
  );
};
