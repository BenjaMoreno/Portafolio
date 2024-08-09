import Button from "react-bootstrap/Button";
import "./Botones.css";
import {ReactComponent as Emoji} from '../../../../IMAGES/SVG/HAPPY.svg'
function Botones() {
  return (
    <>
      <Button variant="outline-primary" className="boton-biblio">
        Botones
      </Button>{" "}
      <Button variant="outline-secondary" className="boton-biblio">
        De
      </Button>{" "}
      <Button variant="outline-success" className="boton-biblio">
        Diferentes
      </Button>{" "}
      <Button variant="outline-warning" className="boton-biblio">
        Colores
      </Button>{" "}
      <Button variant="outline-danger" className="boton-biblio">
        Y
      </Button>{" "}
      <Button variant="outline-info" className="boton-biblio">
        Mucho
      </Button>{" "}
      <Button variant="outline-light" className="boton-biblio">
        Más
      </Button>{" "}
      <Button variant="outline-dark" className="boton-biblio">
        <Emoji className="emoji-btn"/>
      </Button>
    </>
  );
}

export default Botones;
