import React from "react";
import "./Apis.css";
import { PokeApi } from "./POKEAPI/PokeApi";
import { OpenWeather } from "./OPEN WEATHER MAP/OpenWeather";
import { News } from "./NEWS API/News";

export const Apis = () => {
  return (
    <section className="container-apis">
      <article className="info-api">
        <h1 className="titulo-habilidad">Consumo de APIS</h1>
        <h2 className="api-elemento-titulo">
          Consumimos información de OPENWEATHERMAP API
        </h2>
        <div className="api-elemento">
          <OpenWeather />
        </div>
        <h2 className="api-elemento-titulo">
          Consumimos información de la NEWS API &nbsp;&nbsp;&nbsp;(
          <span>Noticias principales y actuales en Estados Unidos</span>)
        </h2>
        <div className="api-elemento fondo-noticias">
          <News />
        </div>
        <h2 className="api-elemento-titulo">
          Consumimos información de la POKE API
        </h2>
        <div className="api-elemento">
          <PokeApi />
        </div>
       
      </article>
    </section>
  );
};
