import React, { useState } from "react";
import "./Contactame.css";
import gmail_logo from "../../IMAGES/SVG/GMAIL.svg";
import wsp_logo from "../../IMAGES/SVG/WHATSAPP.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import rise from '../../IMAGES/SVG/RISE_HANDS.svg'
export const Contactame = () => {
  const [colaborador,setColaborador]=useState(null)
  // VALIDACIÓN DE FORMULARIO
  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      comentario: "",
    },
    validationSchema: Yup.object().shape({
      nombre: Yup.string()
        .min(2, "El nombre es muy corto")
        .max(30, "El nombre es demasiado largo")
        .matches(
          /^[a-zA-Z ]+$/,
          "Porfavor,ingresa un formato válido (sin números)"
        )
        .required("Requerido"),
      email: Yup.string().required(
        "Porfavor ingresa tu correo para poder contactarte"
      ),
      comentario: Yup.string().max(156, "MUCHO TEXTO BRO 🥴 klañsjfas"),
    }),
    onSubmit: (values) => {
      console.log(values);
      setColaborador(values.nombre)
     
      
    },
  });

  return (
    <section className="container-contactame">
      <div className="container-form-comentarios">
        {colaborador ? (
          <div className="form-exitoso"> 
          <h1 style={colaborador.length > 13 ? {display:'flex' ,flexDirection:'column',alignItems:'center',fontSize:'1.6rem'} : {}}>Gracias <strong >{colaborador}</strong></h1>
          <h3>Te contactaré <img src={rise}/></h3>
        </div>
        ) : (
          <form className="formulario-contacto" onSubmit={formik.handleSubmit}>
          <h3>
            Si deseas colaborar conmigo en un proyecto o simplemente dejar un
            mensaje, por favor no dudes en escribirme.
          </h3>
          <input
            type="text"
            placeholder="Tu nombre..."
            className="input-nombre"
            name="nombre"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nombre}
            maxLength={30}
          />
          {formik.errors.nombre && formik.touched.nombre && (
            <span className="error-formik-msg">{formik.errors.nombre}</span>
          )}
          <input
            type="email"
            placeholder="Tu correo..."
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <span className="error-formik-msg">{formik.errors.email}</span>
          )}
          <textarea
            type="text"
            placeholder="Dejame tu comentario..."
            name="comentario"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.comentario}
          />
          {formik.errors.comentario && formik.touched.comentario && (
            <span className="error-formik-msg">{formik.errors.comentario}</span>
          )}
          <button type="submit">Enviar</button>
        </form>
        )}
        
      </div>
      <div className="container-btnes-contacto">
        <a href="https://wa.me/56940551892" className="btn-wsp">
          <img src={wsp_logo} />
          Whatsapp...
        </a>
        <a
          href="mailto:webenja0@gmail.com"
          target="blank"
          className="btn-gmail"
        >
          <img src={gmail_logo} />
          Gmail
        </a>
      </div>
    </section>
  );
};
