import "./NavbarB.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarB() {
  return (
    <Navbar expand="lg" className="container-navbar-bs" variant="dark">
      <Container fluid className="barra-general">
        <Navbar.Brand href="#" className="titulo-navbar">
          Barras de navegación
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" >Inicio</Nav.Link>
            <Nav.Link href="#action2">Contacto</Nav.Link>
            <NavDropdown title="Servicios" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Servicio 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Servicio 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Lo que desees</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="Buscador"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary" className="btn-buscar">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarB;
