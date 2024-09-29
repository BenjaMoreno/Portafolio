import React from "react";
import "./SobreMi.css";
import {ReactComponent as User} from '../../../IMAGES/SVG/USER.svg'

export const SobreMi = () => {
  return (
    <section className="container-descripcion">
      <span>
        <User className="user"/>
        Sobre mí
      </span>
      <p>
        Soy Benjamín Moreno Sáez, un apasionado <b>Desarrollador Web Frontend</b>.
        Después de completar mis estudios en Udemy y Platzi ,y sobretodo en el
        aprendizaje autodidacta, estoy listo para iniciar mi viaje
        profesional y contribuir con entusiasmo y conocimientos a cualquier
        equipo.
      </p>
    </section>
  );
};
