import Spinner from "react-bootstrap/Spinner";
import "./Spinners.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Button } from "react-bootstrap";

function Spinners() {
  
  return (
    <div className="container-spinners">
      <div className="separador-spinners">
        <Spinner animation="border" variant="primary" />
        <Spinner animation="border" variant="warning" />
        <Spinner animation="border" variant="success" />
        <Spinner animation="border" variant="danger" />
        <Spinner animation="border" variant="light" />
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        {/* <Spinner animation="border" variant="info" />
        <Spinner animation="border" variant="light" />
        <Spinner animation="border" variant="dark" /> */}
      </div>
      <div className="separador-spinners">
        {" "}
        <div className="loafin">
          <ProgressBar
            striped
            variant="success"
            now={40}
            animated
            className="barra"
          />
          <ProgressBar striped variant="info" now={20} className="barra" />
          <ProgressBar striped variant="warning" now={60} className="barra" />
          <ProgressBar striped variant="danger" now={80} className="barra" />
        </div>
        <Button variant="success" size="sm" >Probar Barras de progreso</Button>
        {/* <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="dark" /> */}
      </div>
      <div className="separador-spinners">
        <Spinner animation="border" size="sm" variant="secondary" />
        <Spinner animation="border" variant="light" />
        <Spinner animation="grow" size="sm" variant="secondary" />
        <Spinner animation="grow" variant="dark" />
      </div>
    </div>
  );
}

export default Spinners;
