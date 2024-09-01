import './Tarjeta.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import yo from '../../../../IMAGES/generales/yoTarjeta.jpg'

function Tarjeta() {
  return (
    <Card style={{ width: '18rem' }} className='tarjeta'>
      <Card.Img variant="top" src={yo} />
      <Card.Body>
        <Card.Title>Tarjeta de Presentación</Card.Title>
        <Card.Text>
          Interactua con los elementos que hay en pantalla.
        </Card.Text>
        <Button variant="primary">Trabajemos</Button>
      </Card.Body>
    </Card>
  );
}

export default Tarjeta;