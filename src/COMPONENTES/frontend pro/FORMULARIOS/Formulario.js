import React from "react";
import "./Formulario.css";

export const Formulario = () => {
  return (
    <section className="container-formularios">
      <h1 className="titulo-formularios">Validación de Formularios</h1>
      <form action="" className="formulario rosa">
        <h1>Formulario 1</h1>
        <label htmlFor="nombre">Nombre:</label>
        <input placeholder="nombre" type="text" id="nombre" name="nombre" />
        <label htmlFor="email">Tu correo:</label>
        <input placeholder="correo" type="email" id="" name="email" />
        <label htmlFor="celular">Tu celular:</label>
        <input placeholder="numero celular" type="tel" id="" htmlFor='celular' />
        <label htmlFor="comentarios">Comentarios:</label>
        <textarea name="comentarios"></textarea>
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
            <input
              placeholder="nombre de la compañia"
              className="input-verde"
              id=""
            />
          </div>
          <div className="grid-item-form-verde pais">
            <label className="label-titulo">PAIS</label>
            <select>
              <option>sfa</option>
            </select>
          </div>
          <div className="grid-item-form-verde numero">
            <label className="label-titulo">CELULAR</label>
            <input
              placeholder="numero movil"
              className="input-verde"
              type="tel"
              id=""
            />
          </div>
          <div className="grid-item-form-verde correo">
            <label className="label-titulo">CORREO</label>
            <input placeholder="tu correo" className="input-verde" id="" />
          </div>
          <div className="grid-item-form-verde atencion">
            <h5 className="titulo-atencion">Calidad de atención:</h5>
            <label htmlFor="opcion1">
              <input type="radio" id="opcion1" name="opciones" />
              muy mala
            </label>
            <label htmlFor="opcion3">
              <input type="radio" id="opcion2" name="opciones" />
              mala
            </label>
            <label htmlFor="opcion3">
              <input type="radio" id="opcion3" name="opciones" />
              buena
            </label>
            <label htmlFor="opcion4">
              <input type="radio" id="opcion4" name="opciones" />
              muy buena
            </label>
          </div>
          <div className="grid-item-form-verde reglamento1">
            <input type="checkbox" name="reglamento1" id="" />
            <label className="reglamentos" htmlFor="reglamento1">
              Aceptar Reglamentos y condiciones uno
            </label>
          </div>
          <div className="grid-item-form-verde reglamento2">
            <input type="checkbox" name="reglamento2" id="" />
            <label className="reglamentos" htmlFor="reglamento2">
              Aceptar Reglamentos y condiciones dos
            </label>
          </div>
          <button>Enviar</button>
        </div>
      </form>
    </section>
  );
};
