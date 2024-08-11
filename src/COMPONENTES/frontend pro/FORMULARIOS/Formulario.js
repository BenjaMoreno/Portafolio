import React, { useEffect, useState } from "react";
import "./Formulario.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Formulario = () => {
  //ESTADO FORMULARIO ROSA
  const [datosRosa, setDatosRosa] = useState(null);
  //VALIDACIÓN FORMULARIO ROSA
  const formik = useFormik({
    initialValues: {
      nombre: "",
      correo: "",
      celular: "",
      comentario: "",
      genero: "",
    },
    validationSchema: Yup.object().shape({
      nombre: Yup.string().min(2, "Muy corto").max(20, "Muy largo").required('Nombre requerido'),
      correo: Yup.string().email("Ingrese un correo válido").required('Correo requerido'),
      celular: Yup.string().max(20, "Demasiado largo"),
      comentario: Yup.string()
        .min(1, "puedes escribir más si deseas")
        .max(100, "Mucho texto jaja"),
      genero: Yup.string().required("indica tu género porfavor"),
    }),
    onSubmit: (values) => {
      const objetoRosa = {
        nombre: values.nombre,
        correo: values.correo,
        celular: values.celular,
        comentario: values.comentario,
        genero: values.genero,
        titulo:'¡FORMULARIO EXITOSO!'
      };
      setDatosRosa(objetoRosa);
    },
  });
  //VALIDACIÓN FORMULARIO VERDE
  useEffect(() => {
    //MENSAJE DE FORMULARIO EXITOSO
    if(datosRosa != null){

    
    const rosaExitoso = () => {
      var inputsRosa = document.querySelectorAll(".desactivador-rosa");
      inputsRosa.forEach((input) => {
        input.style.display = "none";
      });
      var formRosa = document.querySelector(".rosa");
      var btnRosa = document.querySelector(".rosa button");
      var textoSpan = document.querySelectorAll(".datos-form-rosa-listo");
      textoSpan.forEach((dato)=>{
        dato.style.display='block'
      })
      formRosa.style.width='90%';
      formRosa.style.display = "flex";
      formRosa.style.justifyContent = "space-evenly";
      formRosa.style.color = "grey";
      formRosa.style.fontStyle = "italic";
      formRosa.style.backgroundColor = "#002029";
      btnRosa.style.display = "none";
    };
    rosaExitoso();
  }
  }, [datosRosa]);

  return (
    <section className="container-formularios">
      <h1 className="titulo-formularios">Validación de Formularios</h1>
      <form
        action=""
        className="formulario rosa"
        onSubmit={formik.handleSubmit}
      >
        <h1>{datosRosa === null ? 'Formulario 1' : datosRosa.titulo}</h1>
        <label htmlFor="nombre">
          Nombre:
          {formik.errors.nombre && formik.touched.nombre && (
            <div className="error-yup">{formik.errors.nombre}</div>
          )}
          <span className="datos-form-rosa-listo">
            {datosRosa === null ? "indefinido" : datosRosa.nombre}
          </span>
        </label>
        <input
          placeholder="nombre"
          type="text"
          id="nombre"
          className="desactivador-rosa"
          name="nombre"
          value={formik.values.nombre}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          maxLength={23}
        />
        <label htmlFor="correo">
          Tu correo:
          {formik.errors.correo && formik.touched.correo && (
            <div className="error-yup">{formik.errors.correo}</div>
          )}
          <span className="datos-form-rosa-listo">
            {datosRosa === null ? "indefinido" : datosRosa.correo}
          </span>
        </label>
        <input
          placeholder="correo"
          type="email"
          id=""
          name="correo"
          value={formik.values.correo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="desactivador-rosa"
        />
        <label htmlFor="celular">
          Tu celular:
          {formik.errors.celular && formik.touched.celular && (
            <div className="error-yup">{formik.errors.celular}</div>
          )}
          <span className="datos-form-rosa-listo">{(datosRosa === null || typeof datosRosa.celular === 'string')  ? 'sin numero' :datosRosa.celular}</span>
        </label>
        <input
          type="tel"
          id="celular-rosa"
          className="desactivador-rosa"
          name="celular"
          placeholder="formato (+56 000000000)"
          pattern="\+56 \{9}"
          aria-label="Número de Teléfono"
          value={formik.values.celular}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          // title="Ingrese un número de teléfono válido en el formato: +56 999999999"
        />
        <label>
          Tu genero:
          {formik.errors.genero && formik.touched.genero && (
            <div className="error-yup">{formik.errors.genero}</div>
          )}{" "}
          <span className="datos-form-rosa-listo">{datosRosa === null ? 'indefinido' :datosRosa.genero}</span>
        </label>
        <select
          value={formik.values.genero}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="genero"
          className="desactivador-rosa"
        >
          <option value={""}>No tengo</option>
          <option value={"hombre"}>Hombre</option>
          <option value={"mujer"}>Mujer</option>
          <option value={"indefinido"}>Prefiero no decirlo</option>
        </select>
        <label htmlFor="comentarios">
          Comentarios:
          {formik.errors.comentario && formik.touched.comentario && (
            <div className="error-yup">{formik.errors.comentario}</div>
          )}
          <span className="datos-form-rosa-listo">{datosRosa === null ? 'indefinido' :datosRosa.comentario}</span>
        </label>
        <textarea
          name="comentario"
          value={formik.values.comentario}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="desactivador-rosa"
        ></textarea>
        
        <button type="submit">Enviar</button>
      </form>
      <form action="" className="formulario verde">
        <h1>Formulario 2</h1>
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
