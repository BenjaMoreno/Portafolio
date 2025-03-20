import React, { useContext, useState, useEffect } from "react";
import "./Gestion.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import calculador from "../../../IMAGES/SVG/ABACO.svg";
import social from "../../../IMAGES/SVG/SELFIE.svg";
import creativo from "../../../IMAGES/SVG/BRUSH.svg";
import practico from "../../../IMAGES/SVG/LLAVE.svg";
import { ContextUser } from "../../../CONTEXT/ContextUser";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { boxSizing, display, width } from "@mui/system";
import zIndex from "@mui/material/styles/zIndex";

// ESTILOS MODAL
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#8BC34A",
  boxShadow: 24,
  p: 2,
  minWidth: "350px",
  borderRadius: "10px",
  width: "40vw",
  height: "80vh",
  display: "flex",
  zIndex: 300,
};

export const Gestion = () => {
  // ESTADOS
  const [usuarioState, setUsuarioState] = useState(null);
  const [avatarState, setAvatarState] = useState(practico);
  const [indiceAvatar, setIndiceAvatar] = useState(0);
  const [open, setOpen] = React.useState(false);

  // FUNCIONES
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const clickAvatar = (img, index) => {
    setAvatarState(img);
    setIndiceAvatar(index);
  };
  const formik = useFormik({
    initialValues: {
      usuario: "",
    },
    validationSchema: Yup.object().shape({
      usuario: Yup.string("Porfavor ,ingresa texto")
        .max(10, "Demasiado largo")
        .required("Crea cualquier palabra"),
    }),
    onSubmit: (values) => {
      setUsuarioState(values.usuario);
      crearContexto();
      handleClose();
    },
  });
  const modUsuario = (event) => {
    setUsuarioState(event.target.value);
  };
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
  const handleChange = (event) => {
    formik.handleChange(event); // Llamar a la función de Formik
    modUsuario(event); // Llamar a la segunda función personalizada
  };
  // DATA
  const avatares = [practico, creativo, social, calculador];

  //CONTEXT
  var { setUsuario } = useContext(ContextUser);
  //color para avatar activo
  const avatarActive = "inset 0 0 20px 1px var(--azul-uno)";

  return (
    <section className="container-gestion">
      <Button onClick={handleOpen} className="open-modal-btns">
        Crear un estado
      </Button>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form className="form-estado " onSubmit={formik.handleSubmit}>
              <label>Nombre:</label>
              <input
                type="text"
                placeholder="tu nombre, tu alias..."
                name="usuario"
                value={formik.values.usuario}
                onChange={handleChange}
                onBlur={formik.handleBlur}
                maxLength={13}
              />
              {formik.errors.usuario && formik.touched.usuario && (
                <span>{formik.errors.usuario}</span>
              )}
              <label>Avatar:</label>
              <div className="container-avatars">
                {avatares.map((avatarImg, index) => (
                  <img
                    src={avatarImg}
                    key={index}
                    onClick={() => clickAvatar(avatarImg, index)}
                    style={{
                      boxShadow: indiceAvatar === index ? avatarActive : "none",
                    }}
                  />
                ))}
              </div>
              <Button type="submit">Guardar estado</Button>
            </form>
          </Box>
        </Modal>
      </div>
    </section>
  );
};
