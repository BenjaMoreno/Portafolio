import Carousel from "react-bootstrap/Carousel";
import foto from "../../../../IMAGES/proyectos/sonicpulse.webp";
import "./Carrusel.css";

function Carrusel() {
  var imagenesCarrrusel = [
    {
      foto: foto,
      titulo: "Implementación",
      parrafo: "Lee las diapositivas",
    },
    {
      foto: foto,
      titulo: "De",
      parrafo: "continua",
    },
    { foto: foto, titulo: "Carruseles", parrafo: ";)" },
    {
      foto: foto,
      titulo: "Uso moderado",
      parrafo:
        "Hago uso moderado de bibliotecas,ya que utilizarlas tiene un costo a nivel de rendimiento",
    },
  ];
  return (
    <Carousel fade interval={2000}>
      {imagenesCarrrusel.map((objeto,index) => (
        <Carousel.Item key={index}>
          <img src={objeto.foto} className="img-carrusel" />
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
