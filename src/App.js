import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import LOGO from "../src/IMAGES/logoben.png";
import { QuienSoy } from "./PAGES/Quien Soy/QuienSoy";
import { FrontendPro } from "./PAGES/Frontend pro/FrontendPro";
import { Proyectos } from "./PAGES/Proyectos/Proyectos";
import { Contactame } from "./PAGES/Contactame/Contactame";

function App() {
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
        <footer></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
