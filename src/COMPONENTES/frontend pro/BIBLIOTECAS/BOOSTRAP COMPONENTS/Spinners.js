import Spinner from "react-bootstrap/Spinner";
import "./Spinners.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";

function Spinners() {
  return (
    <div className="container-spinners">
      <div className="separador-spinners">
        <Spinner className="spinner" animation="border" variant="primary" />
        <Spinner className="spinner" animation="border" variant="warning" />
        <Spinner className="spinner" animation="border" variant="success" />
        <Spinner className="spinner" animation="border" variant="danger" />
        <Spinner className="spinner" animation="border" variant="light" />
        <Spinner
          className="spinner"
          size="sm"
          animation="grow"
          variant="primary"
        />
        <Spinner
          className="spinner"
          size="sm"
          animation="grow"
          variant="warning"
        />
        <Spinner
          className="spinner"
          size="sm"
          animation="grow"
          variant="success"
        />
        <Spinner
          className="spinner"
          size="sm"
          animation="grow"
          variant="danger"
        />
        <Spinner
          className="spinner"
          size="sm"
          animation="grow"
          variant="light"
        />
        <Spinner
          className="spinner"
          size="sm"
          animation="grow"
          variant="info"
        />
        {/* <Spinner className="spinner" size="sm" animation="border" variant="info" />
        <Spinner className="spinner" size="sm" animation="border" variant="light" />
        <Spinner className="spinner" size="sm" animation="border" variant="dark" /> */}
      </div>
      <div className="separador-spinners">
        {" "}
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
        {/* <Spinner className="spinner" size="sm" animation="grow" variant="light" />
        <Spinner className="spinner" size="sm" animation="grow" variant="dark" /> */}
      </div>
      <div className="separador-spinners">
        <div className="rango-barra">
          <Form.Label>Rangos</Form.Label>
          <Form.Range />
        </div>
        <div className="spinners-size">
          <Spinner size="sm" animation="border"  variant="primary" />
          <Spinner animation="border" variant="light" />
          <Spinner size="sm" animation="grow"  variant="info" />
          <Spinner animation="grow" variant="success" />
        </div>
      </div>
    </div>
  );
}

export default Spinners;
