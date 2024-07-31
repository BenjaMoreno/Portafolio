import React from "react";
import "./Gestion.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import astronaut from "../../../IMAGES/SVG/ASTRONAUT.svg";
import detective from "../../../IMAGES/SVG/DETECTIVE.svg";
import barwoman from "../../../IMAGES/SVG/BARWOMAN.svg";
import cientifica from "../../../IMAGES/SVG/CIENTIFICA.svg";
export const Gestion = () => {
  //validacion formulario
  const formik = useFormik({
    initialValues: {
      usuario: "",
    },
    validationSchema: Yup.object().shape({
      usuario: Yup.string().max(10, "Demasiado largo"),
    }),
    onSubmit: (values) => {
      console.log(values.usuario);
    },
  });

  return (
    <section className="container-gestion">
      <h1 className="titulo-gestion">Gestión de Estado</h1>
      <form className="form-estado" onSubmit={formik.handleSubmit}>
        <h1>Crea un usuario</h1>
        <div className="container-input-btn">
          <input
            type="text"
            placeholder="estado..."
            name="usuario"
            value={formik.values.usuario}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.usuario && formik.touched.usuario && (
            <span>{formik.errors.usuario}</span>
          )}
          <button type="submit">Crear</button>
        </div>
        <h2>Elige tu avatar</h2>
        <div className="container-avatars">
          <img src={astronaut} alt="" />
          <img src={detective} alt="" />
          <img src={barwoman} alt="" />
          <img src={cientifica} alt="" />
        </div>
      </form>
      <hr className="hr-estado" />
      <div className="resultado-estado">
        <div className="caja-flex-estado">
          Usuario:&nbsp;&nbsp;<span>Benjamin</span>
        </div>
        <div className="caja-flex-estado">
          Avatar:&nbsp;&nbsp;&nbsp;&nbsp;
          <img src={astronaut} alt="" />
        </div>
      </div>
    </section>
  );
};
