import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import LOGO from "../src/IMAGES/logoben.png";
import { QuienSoy } from "./PAGES/Quien Soy/QuienSoy";
import { Proyectos } from "./PAGES/Proyectos/Proyectos";
import { Contactame } from "./PAGES/Contactame/Contactame";
import { FrontendPro } from "./PAGES/Frontend pro/FrontendPro";
import facebook from "../src/IMAGES/SVG/FACEBOOK.svg";
import github from "../src/IMAGES/SVG/GITHUB.svg";
import linkedin from "../src/IMAGES/SVG/LINKEDIN.svg";
import {ReactComponent as FLECHA} from '../src/IMAGES/SVG/FLECHA.svg'
function App() {
  //ACTIVAR BOTON DE SUBIDA HREF=#
  window.addEventListener('scroll',function(){
    var btn_flecha=document.getElementById('subir');
    btn_flecha.style.display=window.scrollY > 0 ? 'block' : 'none'
  })
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <nav>
            <img src={LOGO} id="LOGO" />
            <ul>
              <li>
                <NavLink to="/" className="navlink">
                  ¿Quién soy?
                </NavLink>
              </li>
              <li>
                <NavLink to="/codificando" className="navlink">
                  Frontend Pro
                </NavLink>
              </li>
              <li></li>
              <li>
                <NavLink to="/proyectos" className="navlink">
                  Proyectos
                </NavLink>
              </li>
              <li>
                <NavLink to="/contactame" className="navlink">
                  Contáctame
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="container-hrs-header">
            <hr className="hr-header"></hr>
            <hr className="hr-header"></hr>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<QuienSoy />} />
            <Route path="/codificando" element={<FrontendPro />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/contactame" element={<Contactame />} />
          </Routes>
        </main>
        <footer>
          <div className="container-hrs-footer">
            <hr className="hr-footer" />
            <hr className="hr-footer" />
          </div>
          <div className="container-frase-footer">
            Viviendo, aprendiendo y subiendo de nivel un día a la vez.
          </div>
          <div className="container-rrss">
            <a href="https://web.facebook.com/benjamin.morenosaez.3" target="blank">
              <img src={facebook} alt="logo face" />
            </a>
            <a href="https://www.linkedin.com/in/benjam%C3%ADn-moreno-s%C3%A1ez-frontenddeveloper/" target="blank">
              <img src={linkedin} alt="logo linkedin" />
            </a>
            <a href="https://github.com/BenjaMoreno" target="blank"> 
              <img src={github} alt="logo github" />
            </a>
          </div>
          <img className="logo-footer" src={LOGO} />
        </footer>
        <a href="#" id="subir">
          <FLECHA className="flecha-svg"/>
        </a>
      </div>
    </BrowserRouter>
  );
}

export default App;
