import React from "react";
import "./GridProyectos.css";
import revista_sur_activo from "../../IMAGES/proyectos/revista-sur-activo.webp";
import sonicpulse from "../../IMAGES/proyectos/sonicpulse.webp";
import react_training from "../../IMAGES/proyectos/react-training.webp";
import suractivo_antiguo from "../../IMAGES/proyectos/suractivo-pasado.webp";
import pacis from "../../IMAGES/proyectos/spa.webp";
import iupi from "../../IMAGES/proyectos/iupi.webp";
import LaunchIcon from "@mui/icons-material/Launch";
const proyectos = [
  {
    imgSrc: iupi,
    alt: "IUPI",
    descripcion:
      "Aplicación de planificación financiera, para entornos con alta taza de inflación",
    link: "https://iupi-sample.vercel.app/",
  },
  {
    imgSrc: pacis,
    alt: "Pacis e-commerce",
    descripcion:
      "e-commerce de productos artesanales para el cuidado personal,en el se ofrecen catalogos de productos, los cuales puedes añadir al carrito y comprarlos",
    link: "https://pacis.netlify.app/",
  },
  {
    imgSrc: revista_sur_activo,
    alt: "Revista Sur Activo",
    descripcion:
      "Revista en el sur de Chile,Revista dedicada a compartir actividades de la zona sur de Chile, así como contenido y noticias locales mediante las redes sociales.",
    link: "https://revistasuractivo.com/",
  },
  {
    imgSrc: sonicpulse,
    alt: "Sonic Pulse Landing Page",
    descripcion:
      "Proyecto personal para practicar la estructura de una Landing Page, proyectando al mismo tiempo parte de los estilos que manejo y el uso de bibliotecas.",
    link: "https://animated-croissant-b49064.netlify.app/",
  },
  {
    imgSrc: react_training,
    alt: "React Training Project",
    descripcion:
      "Proyecto personal para practicar y unificar mis conocimientos sobre el rol de Frontend y desarrollo con React en un único proyecto, al cual puedo recurrir cuando necesite refrescar información.",
    link: "https://react-training-oficial.netlify.app/",
  },
  {
    imgSrc: suractivo_antiguo,
    alt: "Sur Activo Version Antigua",
    descripcion: "Version anterior de la Revista Sur Activo.",
    link: "https://loquacious-dolphin-180358.netlify.app/",
  },
];

const Proyecto = ({ imgSrc, alt, descripcion, link }) => (
  <figure>
    <img src={imgSrc} alt={alt} />
    <figcaption>
      <p>{descripcion}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Visitar sitio{" "}
        <LaunchIcon
          sx={{
            height: {
              xs: "15px",
              sm: "15px",
              md: "20px",
              lg: "20px",
              xl: "25px",
            },
          }}
        />
      </a>
    </figcaption>
  </figure>
);

export const GridProyectos = () => {
  return (
    <article className="grid-container-proyectos">
      {proyectos.map((proyecto, index) => (
        <Proyecto key={index} {...proyecto} />
      ))}
    </article>
  );
};
