import React from "react";
import "./Apis.css";
import { PokeApi } from "./POKEAPI/PokeApi";
import { OpenWeather } from "./OPEN WEATHER MAP/OpenWeather";
// import { News } from "./NEWS API/News";

export const Apis = () => {
  return (
    <section className="container-apis">
      <article className="info-api">
        <h1 className="titulo-habilidad">Consumo de APIS</h1>

        <div className="api-elemento">
          <OpenWeather />
        </div>

        <div className="api-elemento">
          <PokeApi />
        </div>

        {/* <div className="api-elemento fondo-noticias">
          <News />
        </div> */}
      </article>
    </section>
  );
};
