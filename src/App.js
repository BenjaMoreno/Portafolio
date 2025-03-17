import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import LOGO from "../src/IMAGES/logoben.png";
import { QuienSoy } from "./PAGES/Quien Soy/QuienSoy";
import { Proyectos } from "./PAGES/Proyectos/Proyectos";
import { Contactame } from "./PAGES/Contactame/Contactame";
import { FrontendPro } from "./PAGES/Frontend pro/FrontendPro";
import { ReactComponent as Facebook } from "../src/IMAGES/SVG/FACEBOOK.svg";
import { ReactComponent as Linkedin } from "../src/IMAGES/SVG/LINKEDIN.svg";
import { ReactComponent as Github } from "../src/IMAGES/SVG/GITHUB.svg";
import { ReactComponent as FLECHA } from "../src/IMAGES/SVG/FLECHA.svg";
import { useEffect, useState } from "react";
import { ContextUser } from "./CONTEXT/ContextUser";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import menu from "../src/IMAGES/SVG/BURGER_MENU.svg";
import Dropdown from "./COMPONENTES/frontend pro/BIBLIOTECAS/MUI_components/Dropdown";
import Tarjeta from "./COMPONENTES/frontend pro/BIBLIOTECAS/MUI_components/Tarjeta";
import Modales from "./COMPONENTES/frontend pro/BIBLIOTECAS/MUI_components/Modales";
import { Spinners } from "./COMPONENTES/frontend pro/BIBLIOTECAS/MUI_components/Spinners";
import { Graficos } from "./COMPONENTES/frontend pro/BIBLIOTECAS/MUI_components/graficos/Graficos";
import { Areas } from "./COMPONENTES/frontend pro/BIBLIOTECAS/MUI_components/graficos/Areas";
import RadarChartComponent from "./COMPONENTES/frontend pro/BIBLIOTECAS/MUI_components/graficos/RadarChartComponent";
import Compuesto from "./COMPONENTES/frontend pro/BIBLIOTECAS/MUI_components/graficos/Compuesto";
import Torta from "./COMPONENTES/frontend pro/BIBLIOTECAS/MUI_components/graficos/Torta";

function App() {
  // ESTADO CONTEXT USUARIO
  const [usuario, setUsuario] = useState(null);
  const [estadoAnimacion, setEstadoAnimacion] = useState({
    usuario: "estado",
    avatar: "",
  });
  const [mostrarCanvas, setMostrarCanvas] = useState(false);

  useEffect(() => {
    if (usuario) {
      setEstadoAnimacion(usuario);
      document.querySelector(".animacion-bienvenida-usuario").style.display =
        "flex";
      setTimeout(function () {
        document.querySelector(".animacion-bienvenida-usuario").style.display =
          "none";
      }, 6000);
    }
  }, [usuario]);

  //ACTIVAR BOTON DE SUBIDA HREF=#
  window.addEventListener("scroll", function () {
    var btn_flecha = document.getElementById("subir");
    btn_flecha.style.display = window.scrollY > 0 ? "block" : "none";
  });
  //Control Canvas
  const abrirCanvas = () => setMostrarCanvas(true);
  const cerrarCanvas = () => setMostrarCanvas(false);
  return (
    <ContextUser.Provider value={{ usuario, setUsuario }}>
      <BrowserRouter>
        <div className="App">
          <header>
            <Navbar expand="lg" className="bg-body-tertiary mb-3">
              <Container fluid className="canvas-container">
                <Navbar.Brand className="brand-logo">
                  <img src={LOGO} id="LOGO" title="Benjamin Moreno" />
                </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls="offcanvasNavbar"
                  onClick={abrirCanvas}
                  style={{ boxShadow: "none" }}
                >
                  <img src={menu} alt="" className="icono-toggle" />
                </Navbar.Toggle>
                <Navbar.Offcanvas
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                  placement="end"
                  onHide={cerrarCanvas}
                  show={mostrarCanvas}
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">
                      <img src={LOGO} className="logo-canvas" />
                    </Offcanvas.Title>
                    {/* <Button>a</Button> */}
                  </Offcanvas.Header>
                  <Offcanvas.Body className="canvas-body">
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <NavLink
                        to="/"
                        className="navlink"
                        onClick={cerrarCanvas}
                      >
                        ¿Quién soy?
                      </NavLink>
                      <NavLink
                        to="/codificando"
                        className="navlink"
                        onClick={cerrarCanvas}
                      >
                        Mis Habilidades
                      </NavLink>
                      <div className="navlink"></div>
                      <NavLink
                        to="/proyectos"
                        className="navlink"
                        onClick={cerrarCanvas}
                      >
                        Proyectos
                      </NavLink>
                      <NavLink
                        to="/contactame"
                        className="navlink"
                        onClick={cerrarCanvas}
                      >
                        Contáctame
                      </NavLink>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
            <NavLink
              className="usuario-activo"
              to="/codificando#gestion"
              title="Clicka para cambiar estado"
            >
              <span>{estadoAnimacion.usuario}</span>
              <img src={estadoAnimacion.avatar} />
            </NavLink>
            <div className="container-hrs-header">
              <hr className="hr-header"></hr>
              <hr className="hr-header"></hr>
            </div>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<QuienSoy />} />
              <Route path="/codificando" element={<FrontendPro />}>
                <Route path="dropdown" element={<Dropdown />} />
                <Route path="graficos" element={<Graficos />}>
                  {/* Ruta de índice para "graficos" */}
                  <Route index element={<Torta />} />
                  <Route path="areas" element={<Areas />} />
                  <Route path="radar" element={<RadarChartComponent />} />
                  <Route path="compuesto" element={<Compuesto />} />
                  <Route path="torta" element={<Torta />} />
                </Route>
                <Route path="tarjetas" element={<Tarjeta />} />
                <Route path="modales" element={<Modales />} />
                <Route path="spinners" element={<Spinners />} />
              </Route>
              <Route path="/proyectos" element={<Proyectos />} />
              <Route path="/contactame" element={<Contactame />} />
            </Routes>
          </main>
          {/* <footer>
            <div className="container-hrs-footer">
              <hr className="hr-footer" />
              <hr className="hr-footer" />
            </div>
            <q>Viviendo, aprendiendo y subiendo de nivel un día a la vez.</q>
            <div className="container-rrss">
              <a
                href="https://web.facebook.com/benjamin.morenosaez.3"
                target="blank"
              >
                <Facebook className="svg-footer" />
              </a>
              <a
                href="https://www.linkedin.com/in/benjam%C3%ADn-moreno-s%C3%A1ez-frontenddeveloper/"
                target="blank"
              >
                <Linkedin className="svg-footer" />
              </a>
              <a href="https://github.com/BenjaMoreno" target="blank">
                <Github className="svg-footer" />
              </a>
            </div>
            <a href="#">
              <img className="logo-footer" src={LOGO} />
            </a>
          </footer> */}
          <a href="#" id="subir" title="Pincha para subir">
            <FLECHA className="flecha-svg" />
          </a>
          <div className="animacion-bienvenida-usuario">
            <h5>¡BIENVENIDO!</h5>
            <span>{estadoAnimacion.usuario}</span>
            <div></div>
          </div>
        </div>
      </BrowserRouter>
    </ContextUser.Provider>
  );
}

export default App;
