import React, { useEffect, useState } from "react";
import "./PokeApi.css";
import pokeball from "../../../../IMAGES/SVG/POKEBALL.svg";

export const PokeApi = () => {
  //ESTADOS
  const [pokemon, setPokemon] = useState("");
  const [pokeDatos, setPokeDatos] = useState(null);

  const consultarPokemon = (e) => {
    e.preventDefault();
    let valor_input = e.target.elements.nombre_pokemon.value.trim();
    if (valor_input) {
      setPokemon(valor_input);
    }
  };

  useEffect(() => {
    if (pokemon) {
      const solicitudPokemon = async () => {
        try {
          const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`;
          const respuesta = await fetch(url);
          if (!respuesta.ok) {
            throw new Error("No se encontró el Pokémon");
          }
          const data = await respuesta.json();
          const datosPokemon = {
            img: data.sprites.front_default,
            nombre: data.name,
            tamaño: data.height,
            habilidad: data.abilities[0].ability.name,
            especie: data.species.name,
          };
          setPokeDatos(datosPokemon);
        } catch (error) {
          console.error("ERROR EN LA CAPTURA DE DATOS", error);
          setPokeDatos({
            img: pokeball,
            nombre: "No encontrado",
            tamaño: "",
            habilidad: "",
            especie: "",
          });
        }
      };
      solicitudPokemon();
    }
  }, [pokemon]);

  return (
    <div className="consulta-pokemon">
      <form className="separador-pokemon" onSubmit={consultarPokemon}>
        <h1>Consulta por un Pokemon</h1>
        <input placeholder="Nombre del Pokémon..." name="nombre_pokemon" />
        <button type="submit">Consultar</button>
      </form>
      <div className="separador-pokemon pokemon">
        {pokeDatos === null ? (
          <img src={pokeball} alt={"pokebola"} />
        ) : (
          <p>a</p>
        )}
        {/* <div className="container-datos-pokemon">
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
        </div> */}
      </div>
    </div>
  );
};
