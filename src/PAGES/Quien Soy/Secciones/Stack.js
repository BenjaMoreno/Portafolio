import React from "react";
import "./Stack.css";
import html from "../../../IMAGES/stack/HTML.png";
import css from "../../../IMAGES/stack/CSS.png";
import js from "../../../IMAGES/stack/JS.png";
import react from "../../../IMAGES/stack/REACT.png";
import git from "../../../IMAGES/stack/GIT.png";
import github from "../../../IMAGES/SVG/GITHUB.svg";
import boostrap from "../../../IMAGES/stack/BOOSTRAP.png";
import react_boostrap from "../../../IMAGES/stack/REACT-BOOSTRAP.png";
import figma from "../../../IMAGES/stack/FIGMA.png";
import wordpress from "../../../IMAGES/stack/WORDPRESS.png";
import Hostinger from "../../../IMAGES/stack/HOSTINGER .png";
import gimp from "../../../IMAGES/stack/GIMP.png";
import netlify from "../../../IMAGES/SVG/NETLIFY.svg";
import vercel from "../../../IMAGES/stack/VERCEL.png";
export const Stack = () => {
  const tecnologias = [
    { nombre: "HTML", img: html },
    { nombre: "CSS", img: css },
    { nombre: "JavaScript", img: js },
    { nombre: "React", img: react },
    { nombre: "Git", img: git },
    { nombre: "GitHub", img: github },
    { nombre: "Bootstrap", img: boostrap },
    { nombre: "React Bootstrap", img: react_boostrap },
    { nombre: "Figma", img: figma },
    { nombre: "WordPress", img: wordpress },
    { nombre: "Hostinger", img: Hostinger },
    { nombre: "Gimp", img: gimp },
    { nombre: "Netlify", img: netlify },
    { nombre: "Vercel", img: vercel },
  ];
  return (
    <div className="container-stack">
      <h1>Tecnologías</h1>
      <section className="stack">
        {tecnologias.map((tecnologia,index) => (
          <figure className="item-stack" key={index}>
            <img src={tecnologia.img} />
            <figcaption>{tecnologia.nombre}</figcaption>
          </figure>
        ))}
      </section>
    </div>
  );
};
