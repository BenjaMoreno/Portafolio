import Spinner from "react-bootstrap/Spinner";
import "./Spinners.css";

function Spinners() {
  return (
    <div className="container-spinners">
      <div className="separador-spinners">
        <Spinner animation="border" variant="primary" />
        <Spinner animation="border" variant="secondary" />
        <Spinner animation="border" variant="success" />
        <Spinner animation="border" variant="danger" />
        <Spinner animation="border" variant="warning" />
        <Spinner animation="border" variant="info" />
        <Spinner animation="border" variant="light" />
        <Spinner animation="border" variant="dark" />
      </div>
      <div className="separador-spinners">
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="dark" />
      </div>
      <div className="separador-spinners">
        <Spinner animation="border" size="sm" variant="secondary"/>
        <Spinner animation="border" variant="light" />
        <Spinner animation="grow" size="sm" variant="secondary"/>
        <Spinner animation="grow" variant="light"/>
      </div>
    </div>
  );
}

export default Spinners;
