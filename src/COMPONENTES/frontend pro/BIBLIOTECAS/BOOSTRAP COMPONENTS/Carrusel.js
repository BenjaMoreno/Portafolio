import Carousel from "react-bootstrap/Carousel";

import "./Carrusel.css";

function Carrusel() {
  const imagenesCarrusel = [
    {
      fondo: "linear-gradient(to right, transparent,red ,transparent)",
      titulo: "Carruseles",
      parrafo: "1",
    },
    {
      fondo: "linear-gradient(to right, transparent,blue ,transparent)",
      titulo: "Personalizables",
      parrafo: "2",
    },

    {
      fondo: "linear-gradient(to right, transparent,brown ,transparent)",
      titulo: "Carruseles",
      parrafo:
        "3",
    },
    {
      fondo: "linear-gradient(to right, transparent,purple ,transparent)",
      titulo: "Personalizables",
      parrafo:
        "4",
    },
    {
      fondo: "linear-gradient(to right, transparent,red ,transparent)",
      titulo: "Carruseles",
      parrafo:
        "5",
    },
    {
      fondo: "linear-gradient(to right, transparent,lime ,transparent)",
      titulo: "Personalizables",
      parrafo:
        "6",
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
          <Carousel.Caption className="caption-bs">
            <h3>{objeto.titulo}</h3>
            <p>{objeto.parrafo}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carrusel;
