import React from "react";
import "./SobreMi.css";
import { ReactComponent as User } from "../../../IMAGES/SVG/USER.svg";

export const SobreMi = () => {
  return (
    <section className="container-descripcion ">
      <h2>
        <User className="iconos-span" />
        Sobre mí
      </h2>
      <p>
        Soy Benjamín Moreno Sáez, un apasionado{" "}
        <a href="https://www.linkedin.com/in/benjamorenosaez/">
          Desarrollador Web Frontend
        </a>
        . Después de sumergirme en el aprendizaje autodidacta,complementando mis
        estudios con Udemy y Platzi. Me siento preparado para iniciar mi carrera
        profesional y aportar con entusiasmo y conocimientos a cualquier equipo.
      </p>
    </section>
  );
};
