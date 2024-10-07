import Carousel from "react-bootstrap/Carousel";

function CarruselReutilizable({ array, className, estadoTitulo,estadoLink }) {
  const handleSelect = (indice) => {
    const claveArray = array[indice];
    estadoTitulo(claveArray.estado);
    estadoLink(claveArray.link)
  };
  return (
    <Carousel className={className} onSelect={handleSelect}>
      {array.map((item, index) => {
        return (
          <Carousel.Item key={index}>
            <img
              src={item.img}
              alt=""
              style={{ width: "100%", height: "auto"}}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default CarruselReutilizable;
