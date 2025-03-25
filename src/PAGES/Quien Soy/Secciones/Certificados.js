import React, { useState } from "react";
import "./Certificados.css";
import { ReactComponent as Certificado } from "../../../IMAGES/SVG/CERTIFICATES.svg";
import { ReactComponent as Verify } from "../../../IMAGES/SVG/VERIFY.svg";
import CarruselReutilizable from "../../../REUTILIZACIÓN/CarruselReutilizable";
import jest from "../../../IMAGES/certificados/foto-jest.png";
import fundamentos from "../../../IMAGES/certificados/fundamentos-pruebas.png";
import fundamentos_frontend from "../../../IMAGES/certificados/fundamentos-frontend.webp";
import cypress from "../../../IMAGES/certificados/cypress.png";
export const Certificados = () => {
  // ESTADOS
  const [titulo, setTitulo] = useState("Tests Unitarios");
  const [linkState, setLinkState] = useState(
    "https://platzi.com/p/moreno.benjamin.saez292/curso/1788-jest/diploma/detalle/"
  );
  const certificados = [
    {
      img: jest,
      pdf: "pdf",
      estado: "Tests Unitarios",
      link: "https://platzi.com/p/moreno.benjamin.saez292/curso/1788-jest/diploma/detalle/",
    },
    {
      img: fundamentos,
      pdf: "pdf",
      estado: "Fundamentos",
      link: "https://platzi.com/p/moreno.benjamin.saez292/curso/1421-pruebas-software/diploma/detalle/",
    },
    {
      img: cypress,
      pdf: "pdf",
      estado: "Tests e2e",
      link: "https://platzi.com/p/moreno.benjamin.saez292/curso/3075-cypress-ui/diploma/detalle/",
    },
    {
      img: fundamentos_frontend,
      pdf: "pdf",
      estado: "Fundamentos",
      link: "#",
    },
  ];

  return (
    <section className="container-certificados">
      <h2 className="subtitulos-quiensoy">
        <Certificado className="iconos-span" />
        Certificaciónes
      </h2>
      <article className="carousel-certificates">
        <CarruselReutilizable
          array={certificados}
          className={"crsl_certificates"}
          estadoTitulo={setTitulo}
          estadoLink={setLinkState}
        />
      </article>
      <div className="info-certificates">
        <h1>{titulo}</h1>
        <div className="container-oficial">
          <a href={linkState} target="blank">
            <button> Ver Oficial</button>
          </a>
          <Verify className="svg-verify" />
        </div>
      </div>
    </section>
  );
};
