import React, { useState } from "react";
import "./Experiencia.css";
import { ReactComponent as Exper } from "../../../IMAGES/SVG/EXPERIENCIA.svg";
import { ReactComponent as Github } from "../../../IMAGES/SVG/GITHUB.svg";

export const Experiencia = () => {
  // ESTADOS
  const [activarDetalles, setActivarDetalles] = useState(null);

  const trabajos = [
    {
      tipo: "Hackathon",
      Descripcion: "NoCountry - Desarrollo de una fintech",
      fecha: "dic.2024 - feb.2025",
      repositorio: "https://github.com/No-Country-simulation/h4-09-fintech",
      caracteristicas: {
        primera:
          "Diseñé e Implementé el Dashboard (Funcionalidad mas importante de la aplicación)",
        segunda: "Creé,diseñé y desarrolle el sistema de notificaciónes con IA",
        tercera:
          "Integré datos financieros como: fondos,progresos,ahorros,gastos,etc...,transformandolos en gráficos interactivos y visualmente atractivos.",
        cuarta:
          "Desarrollé el sistema completo de creación, edición, y eliminación de objetivos financieros,conectado al Backend",
        quinta:
          "Creamos una solución real, para clientes reales,sistemas de pago,inició de sesión.",
        sexta: "Colaboré estrechamente con Backends, Frontend y Diseño UX/UI.",
      },
    },
    {
      tipo: "Práctica laboral",
      Descripcion: "NoCountry - Desarrollo de una e-commerce",
      fecha: "nov.2024 - dic.2024",
      repositorio: "https://github.com/No-Country-simulation/c22-10-m-webapp",

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
      repositorio:
        "https://github.com/No-Country-simulation/c21-16-m-python-react",

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
      Descripcion: "Desarrollo de una revista local",
      fecha: "ene.2022 - dic.2023",
      repositorio: "https://github.com/BenjaMoreno/Revista-Sur-Activo",

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
      <h2>
        <Exper className="iconos-span" />
        Experiencia
      </h2>
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
                <h3>Características del sitio:</h3>
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
                <h3>{trabajo.tipo}</h3>
                <p>{trabajo.Descripcion}</p>
              </div>
            )}

            <div className="container-fecha">
              <a href={trabajo.repositorio} target="blank">
                <Github className="github" title="Visitar el repositorio" />
              </a>
              <div
                className="fecha"
                style={{
                  display: activarDetalles === indiceMap ? "none" : "block",
                }}
              >
                {trabajo.fecha}
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};
