import React from "react";
import "./Stack.css";
import html from "../../../IMAGES/stack/html.svg";
import css from "../../../IMAGES/stack/css.svg";
import js from "../../../IMAGES/stack/js.svg";
import react from "../../../IMAGES/stack/react.svg";
import git from "../../../IMAGES/stack/git.svg";
import github from "../../../IMAGES/SVG/GITHUB.svg";
import boostrap from "../../../IMAGES/stack/boostrap.svg";
import react_boostrap from "../../../IMAGES/stack/REACT-BOOSTRAP.png";
import figma from "../../../IMAGES/stack/figma.svg";
import wordpress from "../../../IMAGES/stack/wordpress.svg";
import Hostinger from "../../../IMAGES/stack/hostinger.svg";
import gimp from "../../../IMAGES/stack/gimp.svg";
import netlify from "../../../IMAGES/SVG/NETLIFY.svg";
import devtools from "../../../IMAGES/SVG/DEVTOOLS.svg";
import vercel from "../../../IMAGES/stack/vercel.svg";
import jest from "../../../IMAGES/SVG/JEST.svg";
import cypress from "../../../IMAGES/SVG/CYPRESS.svg";
import mui from "../../../IMAGES/stack/mui.svg";
import typescript from "../../../IMAGES/stack/typescript.svg";
import vite from "../../../IMAGES/stack/vite.svg";
import zustand from "../../../IMAGES/stack/zustand.svg";

import { ReactComponent as Tecnologys } from "../../../IMAGES/SVG/TECNOLOGIAS.svg";
export const Stack = () => {
  const tecnologias = [
    { nombre: "JavaScript", img: js },
    { nombre: "React", img: react },
    { nombre: "Typescript", img: typescript },
    { nombre: "HTML", img: html },
    { nombre: "CSS", img: css },
    { nombre: "Git", img: git },
    { nombre: "GitHub", img: github },
    { nombre: "Vite", img: vite },
    { nombre: "Material UI", img: mui },
    { nombre: "Bootstrap", img: boostrap },
    { nombre: "React Bootstrap", img: react_boostrap },
    { nombre: "Zustand", img: zustand },
    { nombre: "Figma", img: figma },
    { nombre: "Jest", img: jest },
    { nombre: "Cypress", img: cypress },
    { nombre: "Google DevTools", img: devtools },
    { nombre: "Netlify", img: netlify },
    { nombre: "Vercel", img: vercel },
    { nombre: "WordPress", img: wordpress },
    { nombre: "Hostinger", img: Hostinger },
    { nombre: "Gimp", img: gimp },
  ];
  return (
    <div className="container-stack">
      <h2 className="subtitulos-quiensoy">
        <Tecnologys className="iconos-span" />
        Tecnologías
      </h2>
      <section className="stack">
        {tecnologias.map((tecnologia, index) => (
          <figure className="item-stack" key={index}>
            <img src={tecnologia.img} />
            <figcaption>{tecnologia.nombre}</figcaption>
          </figure>
        ))}
      </section>
    </div>
  );
};
