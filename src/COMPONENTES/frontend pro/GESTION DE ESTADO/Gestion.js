import React, { useContext, useState } from "react";
import "./Gestion.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import calculador from "../../../IMAGES/SVG/ABACO.svg";
import social from "../../../IMAGES/SVG/SELFIE.svg";
import creativo from "../../../IMAGES/SVG/BRUSH.svg";
import practico from "../../../IMAGES/SVG/LLAVE.svg";
import { ContextUser } from "../../../CONTEXT/ContextUser";

export const Gestion = () => {
const avatares=[practico,creativo,social,calculador]



  const [usuarioState, setUsuarioState] = useState(null);
  const [avatarState, setAvatarState] = useState(practico);
  const [indiceAvatar,setIndiceAvatar]=useState(0);

  //colores para avatar activo
  const avatarActive='radial-gradient(lime,rgba(0, 255, 0, 0.455))'

  //Envío de datos al contexto
  var { setUsuario } = useContext(ContextUser);

  // Validación del formulario
  const formik = useFormik({
    initialValues: {
      usuario: "",
    },
    validationSchema: Yup.object().shape({
      usuario: Yup.string('Porfavor ,ingresa texto')
        .max(10, "Demasiado largo")
        .required("Crea cualquier palabra"),
    }),
    onSubmit: (values) => {
      setUsuarioState(values.usuario);
    },
  });

  // Función manejadora personalizada que llama a dos funciones
  const handleChange = (event) => {
    formik.handleChange(event); // Llamar a la función de Formik
    modUsuario(event); // Llamar a la segunda función personalizada
  };

  // Ejemplo de una función personalizada (puedes ajustarla según sea necesario)
  const modUsuario = (event) => {
    setUsuarioState(event.target.value);
  };
  //crear contexto
  const crearContexto = () => {
    if (usuarioState === null) {
      alert("Porfavor intenta ingresar un nombre de Usuario");
    } else {
      let objetoUsuario = {
        usuario: usuarioState,
        avatar: avatarState,
      };
      setUsuario(objetoUsuario);
      
    }
  };
  const clickAvatar=(img,index)=>{
    setAvatarState(img);
    setIndiceAvatar(index)
  }
  
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
            onChange={handleChange} 
            onBlur={formik.handleBlur}
            maxLength={20}
          />
          {formik.errors.usuario && formik.touched.usuario && (
            <span>{formik.errors.usuario}</span>
          )}
          <button type="submit" onClick={crearContexto}>
            Crear
          </button>
        </div>
        <h2>Elige tu avatar</h2>
        <div className="container-avatars">
          {avatares.map((avatarImg,index)=>(
            <img
            src={avatarImg}
            key={index}
            onClick={() => clickAvatar(avatarImg,index)}
            style={{background:indiceAvatar === index ? avatarActive : 'transparent',
            }}
            />
          ))}
        </div>
      </form>
      <hr className="hr-estado" />
      <div className="resultado-estado">
        <div className="caja-flex-estado">
          Usuario:&nbsp;&nbsp;<span>{usuarioState}</span>
        </div>
        <div className="caja-flex-estado">
          Avatar:&nbsp;&nbsp;&nbsp;&nbsp;
          <img src={avatarState} alt="Astronauta" />
        </div>
      </div>
    </section>
  );
};
