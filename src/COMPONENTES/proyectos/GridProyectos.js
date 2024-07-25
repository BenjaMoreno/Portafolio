import React from "react";
import "./GridProyectos.css";
import revista_sur_activo from "../../IMAGES/proyectos/revista-sur-activo.webp";
import sonicpulse from "../../IMAGES/proyectos/sonicpulse.webp";
import react_training from "../../IMAGES/proyectos/react-training.webp";
import suractivo_antiguo from "../../IMAGES/proyectos/suractivo-pasado.webp";
export const GridProyectos = () => {
  return (
    <article className="grid-container-proyectos">
      <figure>
        <img src={revista_sur_activo} alt="" />
        <figcaption>
          <p>
            Revista en el sur de Chile, dedicada principalmente a compartir
            actividades a través de su sitio web, así como contenido y noticias
            locales mediante las redes sociales.
          </p>
          <a href="https://revista-sur-activo-6t3tm88qt-benjamins-projects-0e3ff485.vercel.app/" target="blank">Visitar sitio 🖥️</a>
        </figcaption>
      </figure>
      <figure>
        <img src={sonicpulse} alt="" />
        <figcaption>
          <p>
            Proyecto personal para practicar la estructura de una Landing Page,
            proyectando al mismo tiempo parte de los estilos que manejo y el uso
            de bibliotecas.
          </p>
          <a
            href="https://65e6060432e6f70bd481fa03--animated-croissant-b49064.netlify.app/"
            target="blank"
          >
            Visitar sitio 🖥️
          </a>{" "}
        </figcaption>
      </figure>
      <figure>
        <img src={react_training} alt="" />
        <figcaption>
          <p>
            Proyecto personal para practicar y unificar mis conocimientos sobre
            el rol de Frontend y desarrollo con React en un único proyecto, al
            cual puedo recurrir cuando necesite refrescar información.
          </p>
          <a href="https://reacttrainingoficial-qosf76o4j-benjamins-projects-0e3ff485.vercel.app/" target="blank">Visitar sitio 🖥️</a>{" "}
        </figcaption>
      </figure>
      <figure>
        <img src={suractivo_antiguo} alt="" />
        <figcaption>
          <p>
            Version anterior de la Revista Sur Activo.
          </p>
          <a href="https://loquacious-dolphin-180358.netlify.app/" target="blank">Visitar sitio 🖥️</a>
        </figcaption>
      </figure>
    </article>
  );
};
