import React, { useState } from "react";
import "./Experiencia.css";
import { ReactComponent as Exper } from "../../../IMAGES/SVG/EXPERIENCIA.svg";

export const Experiencia = () => {
  // ESTADOS
  const [activarDetalles, setActivarDetalles] = useState(null);

  const trabajos = [
    {
      tipo: "Práctica laboral",
      Descripcion: "NoCountry - Desarrollo de un sitio web e-commerce",
      fecha: "nov.2024 - presente",
      caracteristicas: {
        primera: `Desarrollé completamente el sitio web de tipo "e-commerce" sobre productos artesanales,para el cuidado personal`,
        segunda:
          "Integré y consumí APIs, apoyé y resolví problemas constantemente en Backend",
        tercera:
          "Logré una mejora del 50% en el rendimiento del sitio mediante la optimización de imágenes",
        cuarta:
          "Traduje diseños UX/UI a código funcional.Maqueté e implementé estilos en CSS y desarrollé la lógica de los componentes.",
        quinta:
          "Participé en dailies cinco veces a la semana, así como en reuniones técnicas con roles clave del equipo (Backend, Frontend, UX/UI, QA, Project Manager y Team Leader).",
        sexta:
          "Colaboré de manera efectiva con el equipo, logrando conectarnos, generar un buen ambiente, y poner en marcha todo lo planicado. Habilidades como comunicación efectiva, escucha activa, proactividad y compromiso fueron fundamentales para el éxito del proyecto.",
        septima: "Responsive Design",
      },
    },
    {
      tipo: "Práctica laboral",
      Descripcion: "NoCountry - Desarrollo de una Red Social",
      fecha: "sept.2024 - nov.2024",
      caracteristicas: {
        primera: "Diseñé y desarrollé el sitio",
        segunda: "Optimizé y mejoré rendimiento del sitio",
        tercera: "Implementé navegacióna avanzada (SPA)",
        cuarta: "Desarrollo de lógica y reutilización de componentes",
        quinta:
          "Implementé funcionalidades (Login,Navegación SPA,sistema de publicaciones,etc..).",
        sexta: "Colaboré estrechamente con Backends, Frontend y Teamleader.",
      },
    },
    {
      tipo: "Freelance",
      Descripcion: "Desarrollo de una revista local para el sur de Chile",
      fecha: "ene.2022 - dic.2023",
      caracteristicas: {
        primera: "Diseño y desarrollo del sitio",
        segunda: "Optimización y rendimiento del sitio",
        tercera: "Página SPA (Single Page Aplication)",
        cuarta: "Validación de formularios",
        quinta: "Componentes reutilizables",
        sexta: "Testeo Unitario y E2E del sitio",
        septima: "Responsive Design",
      },
    },
  ];

  const quitarDetalles = () => {
    setActivarDetalles(null);
  };

  return (
    <section className="container-experiencia">
      <span>
        <Exper className="iconos-span" />
        Experiencia
      </span>
      <section className="grid-container-experiencia">
        {trabajos.map((trabajo, indiceMap) => (
          <div
            className="trabajo"
            key={indiceMap}
            onClick={() => setActivarDetalles(indiceMap)}
            onMouseLeave={quitarDetalles}
            title="Haz clic para ver detalles del trabajo"
          >
            {activarDetalles === indiceMap ? (
              <div className="detalles-trabajo">
                <h2>Características del sitio:</h2>
                <ul>
                  {Object.entries(trabajo.caracteristicas).map(
                    ([clave, valor], index) => (
                      <li key={index}>{valor}</li>
                    )
                  )}
                </ul>
              </div>
            ) : (
              <div className="center-trabajo">
                <h2>{trabajo.tipo}</h2>
                <p>{trabajo.Descripcion}</p>
              </div>
            )}

            <div
              className="fecha"
              style={{
                display: activarDetalles === indiceMap ? "none" : "block",
              }}
            >
              {trabajo.fecha}
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};
