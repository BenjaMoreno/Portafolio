import React from "react";
import "./Contactame.css";
import gmail_logo from "../../IMAGES/SVG/GMAIL.svg";
import wsp_logo from "../../IMAGES/SVG/WHATSAPP.svg";

export const Contactame = () => {
  return (
    <section className="container-contactame">
      <div className="container-form-comentarios">
        <form className="formulario-contacto">
          <h3>
          Si deseas colaborar conmigo en un proyecto o simplemente dejar un mensaje, por favor no dudes en escribirme.
          </h3>
          <input type="text" placeholder="Tu nombre..." className="input-nombre"/>
          <input type="email" placeholder="Tu correo..."  />
          <textarea type="text" placeholder="Dejame tu comentario..."  />
          <button>Enviar</button>
        </form>
      </div>
      <div className="container-btnes-contacto">
        <a href="https://wa.me/56940551892" className="btn-wsp">
          <img src={wsp_logo} />
          Whatsapp...
        </a>
        <a href="mailto:webenja0@gmail.com" className="btn-gmail">
          <img src={gmail_logo} />
          Gmail
        </a>
      </div>
    </section>
  );
};
