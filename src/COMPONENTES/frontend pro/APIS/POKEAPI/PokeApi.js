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
          console.log(data);
          const datosPokemon = {
            img: data.sprites.front_default,
            nombre: data.name,
            tamaño: data.height,
            habilidad: data.abilities[0].ability.name,
            pokedex: data.id,
            tipo: data.types[0].type.name,
            peso: data.weight,
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
        <button type="submit" className="api-btns">Consultar</button>
      </form>
      <div className="separador-pokemon pokemon">
        {pokeDatos === null ? (
          <img src={pokeball} alt={"pokebola"} />
        ) : (
          <section className="container-datos-weather">
            <div className="item-weather">
              <img src={pokeDatos.img} />
              <div>
                <h3>{pokeDatos.nombre}</h3>
                <small title="Numero en la pokedex">
                  /&nbsp;{pokeDatos.pokedex}
                </small>
              </div>
            </div>
            <div className="item-weather">
              <h5>
                Tipo:&nbsp;&nbsp;<b>{pokeDatos.tipo}</b>
              </h5>
            </div>
            <div className="item-weather">
              <h5>
                Peso:&nbsp;&nbsp;<b>{pokeDatos.peso} (hg)</b>
              </h5>
            </div>
            <div className="item-weather">
              <h5>
                Tamaño:&nbsp;&nbsp;<b>{pokeDatos.tamaño}(dm)</b>
              </h5>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
