import React, { useEffect, useState } from "react";
import "./PokeApi.css";

export const PokeApi = () => {
  //ESTADOS
  const [pokemon, setPokemon] = useState("");
  const [pokeDatos, setPokeDatos] = useState({
    img: "",
    nombre: "",
    tamaño: "",
    habilidad: "",
    especie: "",
  });

  const consultarPokemon = (e) => {
    e.preventDefault();
    let valor_input = e.target.elements.nombre_pokemon.value.trim();
    setPokemon(valor_input);
  };
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        const datosPokemon = {
          img: data.sprites.front_default,
          nombre: data.name,
          tamaño: data.height,
          habilidad: data.abilities[0].ability.name,
          especie: data.species.name,
        };
        setPokeDatos(datosPokemon);
      })
      .catch((error) => console.error("ERROR EN LA CAPTURA DE DATOS", error));
  }, [pokemon]);

  return (
    <div className="consulta-pokemon">
      <form className="separador-pokemon" onSubmit={consultarPokemon}>
        <h1>Consulta por un Pokemon</h1>
        <input placeholder="Nombre del Pókemon..." name="nombre_pokemon" />
        <button type="submit"> Consultar</button>
      </form>
      <div className="separador-pokemon pokemon">
        <img src={pokeDatos.img} />
        <div className="container-datos-pokemon">
          <div className="dato-pokemon">
            <span>Nombre:</span>&nbsp;
            <strong>{pokeDatos.nombre}</strong>
          </div>
          <div className="dato-pokemon">
            <span>Tamaño:</span>&nbsp;
            <strong>{pokeDatos.tamaño}</strong>
          </div>
          <div className="dato-pokemon">
            <span>Habilidad:</span>&nbsp;
            <strong>{pokeDatos.habilidad}</strong>
          </div>
          <div className="dato-pokemon">
            <span>Especie:</span>&nbsp;
            <strong>{pokeDatos.especie}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
