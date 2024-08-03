import React from "react";
import "./Formulario.css";

export const Formulario = () => {
  return (
    <section className="container-formularios">
      <h1 className="titulo-formularios">Validacion de Formularios</h1>
      <form action="" className="formulario rosa">
        <h1>Formulario 1</h1>
        <label>Nombre:</label>
        <input placeholder="nombre" type="text" />
        <label>Tu correo:</label>
        <input placeholder="correo" type="email" />
        <label>Tu celular:</label>
        <input placeholder="numero celular" type="tel" />
        <label>Comentarios:</label>
        <textarea></textarea>
        <label>Tu genero:</label>
        <select>
          <option>Hombre</option>
          <option>Mujer</option>
          <option>Prefiero no decirlo</option>
        </select>
        <button>Enviar</button>
      </form>
      <form action="" className="formulario verde">
        <h1>Formulario 2</h1>
        {/* calidad de atencion
        compañia
        numero telefono
        pais
        reglamentos x2 */}
        <div className="grid-container-form-verde">
          <div className="grid-item-form-verde compañia">
            <label className="label-titulo">COMPAÑÍA</label>
            <input placeholder="nombre de la compañia" className="input-verde"/>
          </div>
          <div className="grid-item-form-verde pais">
            <label className="label-titulo">PAIS</label>
            <input placeholder="pais de residencia" className="input-verde" />
          </div>
          <div className="grid-item-form-verde numero">
            <label className="label-titulo">CELULAR</label>
            <input placeholder="numero movil"  className="input-verde"/>
          </div>
          <div className="grid-item-form-verde correo">
            <label className="label-titulo">CORREO</label>
            <input placeholder="tu correo" className="input-verde"/>
          </div>
          <div className="grid-item-form-verde atencion"></div>
          <div className="grid-item-form-verde reglamento1"></div>
          <div className="grid-item-form-verde reglamento2"></div>
          <button>Enviar</button>
        </div>
      </form>
    </section>
  );
};
