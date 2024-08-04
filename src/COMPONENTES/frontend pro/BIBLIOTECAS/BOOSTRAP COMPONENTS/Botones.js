import Button from "react-bootstrap/Button";
import "./Botones.css";
function Botones() {
  return (
    <>
      <Button variant="outline-primary" className="boton-biblio">
        Primary
      </Button>{" "}
      <Button variant="outline-secondary" className="boton-biblio">
        Secondary
      </Button>{" "}
      <Button variant="outline-success" className="boton-biblio">
        Success
      </Button>{" "}
      <Button variant="outline-warning" className="boton-biblio">
        Warning
      </Button>{" "}
      <Button variant="outline-danger" className="boton-biblio">
        Danger
      </Button>{" "}
      <Button variant="outline-info" className="boton-biblio">
        Info
      </Button>{" "}
      <Button variant="outline-light" className="boton-biblio">
        Light
      </Button>{" "}
      <Button variant="outline-dark" className="boton-biblio">
        Dark
      </Button>
    </>
  );
}

export default Botones;
