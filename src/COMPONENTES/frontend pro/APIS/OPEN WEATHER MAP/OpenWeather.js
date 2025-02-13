import React, { useEffect, useState } from "react";
import "./OpenWeather.css";
import { ReactComponent as Weather } from "../../../../IMAGES/SVG/WEATHER.svg";

export const OpenWeather = () => {
  //ESTADOS
  const [ciudad, setCiudad] = useState("");
  const [cityData, setCityData] = useState(null);
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
          console.log(data);
          const datosCiudad = {
            img: data.weather[0].icon,
            nubosidad: data.clouds.all,
            clima: data.weather[0].main,
            humedad: data.main.humidity,
            temperatura: data.main.temp,
            ciudad: data.name,
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
        <button type="submit"  className="api-btns"> Consultar</button>
      </form>
      <div className="separador-weather weather">
        {cityData === null ? (
          <Weather />
        ) : (
          <section className="container-datos-weather">
            <div className="item-weather">
              <img
                src={`http://openweathermap.org/img/wn/${cityData.img}@2x.png`}
              />
              <div>
                <h3>{cityData.ciudad}</h3>
                <small>/{cityData.clima}</small>
              </div>
            </div>
            <div className="item-weather">
              <h5>
                Temperatura:&nbsp;&nbsp;<b>{cityData.temperatura}°C</b>
              </h5>
            </div>
            <div className="item-weather">
              <h5>
                Nubosidad:&nbsp;&nbsp;<b>{cityData.nubosidad}%</b>
              </h5>
            </div>
            <div className="item-weather">
              <h5>
                Humedad:&nbsp;&nbsp;<b>{cityData.humedad}%</b>
              </h5>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
