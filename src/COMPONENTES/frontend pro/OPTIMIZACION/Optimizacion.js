import React, { useEffect } from "react";
import "./Optimizacion.css";
import { ReactComponent as Hand } from "../../../IMAGES/SVG/HAND.svg";
import { ReactComponent as Img } from "../../../IMAGES/SVG/PICTURE.svg";
import Codigo from '../../../IMAGES/generales/CODIGO.webp'

export const Optimizacion = () => {
  useEffect(() => {
    const animacionAparecer = (entrante) => {
      let objeto = entrante[0];
      if (objeto.isIntersecting) {
        document
          .querySelector(".item-opti:nth-child(1)")
          .classList.add("active");
        setTimeout(function () {
          document
            .querySelector(".item-opti:nth-child(2)")
            .classList.add("active");
        }, 500);
        setTimeout(function () {
          document
            .querySelector(".item-opti:nth-child(3)")
            .classList.add("active");
        }, 1000);
      }
    };
    let observador = new IntersectionObserver(animacionAparecer, {});
    const objetivo = document.querySelector(".item-opti");
    if (objetivo) {
      observador.observe(objetivo);
    }
  }, []);
  return (
    <section className="container-optimizacion">
      <h1>Optimización</h1>
      <article>
        <div className="item-opti">
          <h2>Lazy Loading</h2>
          <div className="container-lazy quitarp">
            <Img className="picture " />
            <Hand className="hand " />
          </div>
        </div>
        <div className="item-opti ">
          <h2>Imagenes</h2>
          <div className="container-webp quitarp">
            <Img className="picture " />
            <h1 className="webp sub-item-opti ">.webp</h1>
          </div>
        </div>
        <div className="item-opti">
          <h2>Código</h2>
          <div className="container-codigo quitarp">
            <img src={Codigo}/>
            <strong className="sub-item-opti">Código Limpio</strong>
          </div>
        </div>
      </article>
    </section>
  );
};
