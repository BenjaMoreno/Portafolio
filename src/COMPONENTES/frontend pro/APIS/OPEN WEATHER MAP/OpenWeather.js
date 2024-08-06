import React, { useEffect, useState } from "react";
import "./OpenWeather.css";
import weather_paper from "../../../../IMAGES/SVG/WEATHER.svg";

export const OpenWeather = () => {
  //ESTADOS
  const [ciudad, setCiudad] = useState("");
  const [cityData, setCityData] = useState({
    img: "",
    nubosidad: "",
    clima: "",
    humedad: "",
    temperatura: "",
  });
  const consultarClima = (e) => {
    e.preventDefault();
    var city = e.target.elements.nombre_ciudad.value;
    setCiudad(city);
  };
  useEffect(() => {
    if (ciudad) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=48b3b91bb4714861f439051fc263fcfa`
      )
        .then((respuesta) => respuesta.json())
        .then((data) => {
          const datosCiudad = {
            img: data.weather[0].icon,
            nubosidad: data.clouds.all,
            clima: data.weather[0].main,
            humedad: data.main.humidity,
            temperatura: data.main.temp,
          };
          setCityData(datosCiudad);
        })
        .catch((error) => console.error("ERROR EN LA CAPTURA DE DATOS", error));
    }
  }, [ciudad]);

  return (
    <div className="consulta-weather">
      <form className="separador-weather" onSubmit={consultarClima}>
        <h1>Consulta el clima actual</h1>
        <input placeholder="Escribe una ciudad..." name="nombre_ciudad" />
        <button type="submit"> Consultar</button>
      </form>
      <div className="separador-weather weather">
        <div className="container-datos-weather">
          <div className="dato-weather">
            <img
              src={
                cityData.img === ""
                  ? weather_paper
                  : `http://openweathermap.org/img/wn/${cityData.img}@2x.png`
              }
            />
            <span>Clima:</span>
            <strong>{cityData.clima}</strong>
          </div>
          <div className="dato-weather">
            <span>Humedad:</span>
            <strong>{cityData.humedad}%</strong>
          </div>
          <div className="dato-weather">
            <span>Nubosidad:</span>
            <strong>{cityData.nubosidad}%</strong>
          </div>
          <div className="dato-weather">
            <span>Temperatura:</span>
            <strong>{cityData.temperatura}°C</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
