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
            <input
              placeholder="nombre de la compañia"
              className="input-verde"
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
            <input placeholder="numero movil" className="input-verde"  type="tel"/>
          </div>
          <div className="grid-item-form-verde correo">
            <label className="label-titulo">CORREO</label>
            <input placeholder="tu correo" className="input-verde" />
          </div>
          <div className="grid-item-form-verde atencion">
            <label className="titulo-atencion">Calidad de atención:</label>
            <label for="opcion1">
              <input type="radio" id="opcion1" name="opciones" />
              muy mala
            </label>
            <label for="opcion2">
              <input type="radio" id="opcion2" name="opciones" />
              mala
            </label>
            <label for="opcion3">
              <input type="radio" id="opcion2" name="opciones" />
              buena
            </label>
            <label for="opcion4">
              <input type="radio" id="opcion2" name="opciones" />
              muy buena
            </label>
          </div>
          <div className="grid-item-form-verde reglamento1">
            <label className="reglamentos">
              <input type="checkbox" />
              <span>Aceptar Reglamentos y condiciones uno</span>
            </label>
          </div>
          <div className="grid-item-form-verde reglamento2">
            <label className="reglamentos">
              <input type="checkbox" />
              <span>Aceptar Reglamentos y condiciones dos</span>
            </label>
          </div>
          <button>Enviar</button>
        </div>
      </form>
    </section>
  );
};
