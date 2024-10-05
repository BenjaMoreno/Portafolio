import React, { useEffect, useState } from "react";
import "./Experiencia.css";
import { ReactComponent as Exper } from "../../../IMAGES/SVG/EXPERIENCIA.svg";

export const Experiencia = () => {
  // ESTADOS
  const [activarDetalles, setActivarDetalles] = useState(null);

  const trabajos = [
    {
      tipo: "Freelance",
      Descripcion: "Desarrollo de una revista local para el sur de Chile",
      fecha: "ene.2024 - dic.2024",
      caracteristicas: {
        primera: "Creación del sitio",
        segunda: "Optimización y rendimiento del sitio",
        tercera: "Página SPA (Single Page Aplication)",
        cuarta: "cuarta",
        quinta: "quinta",
      },
    },
    {
      tipo: "Simulación laboral",
      Descripcion: "NoCountry - Desarrollo de una Red Social",
      fecha: "sept.30 - oct.",
      caracteristicas: {
        primera: "primera",
        segunda: "segunda",
        tercera: "tercera",
        cuarta: "cuarta",
        quinta: "quinta",
      },
    },
  ];

  useEffect(() => {}, [activarDetalles]);
  const quitarDetalles = (e) => {
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
            onMouseLeave={(e) => quitarDetalles()}
            title="Haz clic para ver detalles del trabajo"
          >
            {activarDetalles === indiceMap ? (
              <div className="detalles-trabajo">
                <h2>Características del sitio:</h2>
                <ul>
                  <li>{trabajo.caracteristicas.primera}</li>
                  <li>{trabajo.caracteristicas.segunda}</li>
                  <li>{trabajo.caracteristicas.tercera}</li>
                </ul>
              </div>
            ) : (
              <div className="center-trabajo">
                <h2>{trabajo.tipo}</h2>
                <p>{trabajo.Descripcion}</p>
              </div>
            )}

            <div className="fecha">{trabajo.fecha}</div>
          </div>
        ))}
      </section>
    </section>
  );
};
