import Carousel from 'react-bootstrap/Carousel';
import foto from '../../../../IMAGES/proyectos/sonicpulse.webp'
import './Carrusel.css'

function Carrusel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={foto} className='img-carrusel'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={foto} className='img-carrusel'/>
      <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={foto} className='img-carrusel'/>
      <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;