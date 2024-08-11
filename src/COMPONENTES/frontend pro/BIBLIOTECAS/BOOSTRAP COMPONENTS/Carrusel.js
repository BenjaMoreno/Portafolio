import Carousel from "react-bootstrap/Carousel";

import "./Carrusel.css";

function Carrusel() {
  const imagenesCarrusel = [
    {
      fondo: "red",
      titulo: "1",
      parrafo: "Lee las diapositivas",
    },
    {
      fondo: "green",
      titulo: "2",
      parrafo: "continua",
    },

    {
      fondo: "orange",
      titulo: "3",
      parrafo:
        "Hago uso moderado de bibliotecas,ya que utilizarlas tiene un costo a nivel de rendimiento",
    },
    {
      fondo: "purple",
      titulo: "4",
      parrafo:
        "Hago uso moderado de bibliotecas,ya que utilizarlas tiene un costo a nivel de rendimiento",
    },
    {
      fondo: "blue",
      titulo: "5",
      parrafo:
        "Hago uso moderado de bibliotecas,ya que utilizarlas tiene un costo a nivel de rendimiento",
    },
    {
      fondo: "brown",
      titulo: "6",
      parrafo:
        "Hago uso moderado de bibliotecas,ya que utilizarlas tiene un costo a nivel de rendimiento",
    },
  ];

  return (
    <Carousel fade interval={2000} className="carousel-bs">
      {imagenesCarrusel.map((objeto, index) => (
        <Carousel.Item
          key={index}
          style={{ backgroundColor: objeto.fondo }}
          className="item-carrusel-bs"
        >
          <Carousel.Caption>
            <h3>{objeto.titulo}</h3>
            <p>{objeto.parrafo}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carrusel;
