import Carousel from "react-bootstrap/Carousel";

import "./Carrusel.css";

function Carrusel() {
  const imagenesCarrusel = [
    {
      fondo: "linear-gradient(to right, transparent,red ,transparent)",
      titulo: "Carruseles",
      parrafo: "Lee las diapositivas",
    },
    {
      fondo: "linear-gradient(to right, transparent,blue ,transparent)",
      titulo: "Carruseles",
      parrafo: "continua",
    },

    {
      fondo: "linear-gradient(to right, transparent,brown ,transparent)",
      titulo: "Carruseles",
      parrafo:
        "Hago uso moderado de bibliotecas,ya que utilizarlas tiene un costo a nivel de rendimiento",
    },
    {
      fondo: "linear-gradient(to right, transparent,purple ,transparent)",
      titulo: "Personalizables",
      parrafo:
        "Hago uso moderado de bibliotecas,ya que utilizarlas tiene un costo a nivel de rendimiento",
    },
    {
      fondo: "linear-gradient(to right, transparent,red ,transparent)",
      titulo: "1",
      parrafo:
        "Hago uso moderado de bibliotecas,ya que utilizarlas tiene un costo a nivel de rendimiento",
    },
    {
      fondo: "linear-gradient(to right, transparent,lime ,transparent)",
      titulo: "2",
      parrafo:
        "Hago uso moderado de bibliotecas,ya que utilizarlas tiene un costo a nivel de rendimiento",
    },
  ];

  return (
    <Carousel fade interval={1500} className="carousel-bs">
      {imagenesCarrusel.map((objeto, index) => (
        <Carousel.Item
          key={index}
          style={{ background: objeto.fondo }}
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
