import React, { useEffect, useState } from "react";
import "./Formulario.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Formulario = () => {
  //ESTADO FORMULARIO ROSA
  const [datosRosa, setDatosRosa] = useState(null);
  //ESTADO FORMULARIO VERDE
  const [datosVerde, setDatosVerde] = useState(null);
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
      nombre: Yup.string()
        .min(2, "Muy corto")
        .max(20, "Muy largo")
        .required("Nombre requerido"),
      correo: Yup.string()
        .email("Ingrese un correo válido")
        .required("Correo requerido"),
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
        titulo: "¡FORMULARIO EXITOSO!",
      };
      setDatosRosa(objetoRosa);
    },
  });

  useEffect(() => {
    //MENSAJE DE FORMULARIO EXITOSO
    if (datosRosa != null) {
      const rosaExitoso = () => {
        var inputsRosa = document.querySelectorAll(".desactivador-rosa");
        inputsRosa.forEach((input) => {
          input.style.display = "none";
        });
        var formRosa = document.querySelector(".rosa");
        var btnRosa = document.querySelector(".rosa button");
        var textoSpan = document.querySelectorAll(".datos-form-rosa-listo");
        textoSpan.forEach((dato) => {
          dato.style.display = "block";
        });
        formRosa.style.width = "90%";
        formRosa.style.display = "flex";
        formRosa.style.justifyContent = "space-evenly";
        formRosa.style.color = "grey";
        formRosa.style.fontStyle = "italic";
        formRosa.style.backgroundColor = "#002029";
        btnRosa.style.display = "none";
      };
      rosaExitoso();
      //LIMPIEZA
      return () => {
        var inputsRosa = document.querySelectorAll(".desactivador-rosa");
        inputsRosa.forEach((input) => {
          input.style.display = "";
        });
        var formRosa = document.querySelector(".rosa");
        var btnRosa = document.querySelector(".rosa button");
        var textoSpan = document.querySelectorAll(".datos-form-rosa-listo");
        textoSpan.forEach((dato) => {
          dato.style.display = "none";
        });
        formRosa.style.width = "";
        formRosa.style.display = "";
        formRosa.style.justifyContent = "";
        formRosa.style.color = "";
        formRosa.style.fontStyle = "";
        formRosa.style.backgroundColor = "";
        btnRosa.style.display = "";
      };
    }
  }, [datosRosa]);
  useEffect(() => {
    if (datosVerde != null) {
      document.querySelector(".grid-container-form-verde").style.display =
        "none";
      document.querySelector(".verde").style.backgroundColor = "transparent";
      document.querySelector(".verde").style.border = "2px solid lime";
      document.querySelector(".container-exitoso-verde").style.display = "grid";
    }
  }, [datosVerde]);
  //VALIDACIÓN FORMULARIO VERDE

  const formikVerde = useFormik({
    initialValues: {
      compañia: "",
      pais: "",
      celular: "",
      correo: "",
      atencion: "",
      reglamentos: [],
    },
    validationSchema: Yup.object().shape({
      compañia: Yup.string().max(
        60,
        "Muy largo"
      ),
      pais: Yup.string().required("*Nacionalidad requerida"),
      celular: Yup.string()
        .max(15, "Formato muy extenso")
        .required("*Numero móvil requerido"),
      correo: Yup.string().required("*Correo requerido"),
      atencion: Yup.string(),
      // reglamentos:Yup.string()
    }),
    onSubmit: (values) => {
      const objetoVerde = {
        compañia: values.compañia,
        pais: values.pais,
        celular: values.celular,
        correo: values.correo,
        atencion: values.atencion,
        reglamentos: values.reglamentos,
        titulo: "¡Formulario exitoso!",
      };
      setDatosVerde(objetoVerde);
      console.log(values)
    },
  });
  const countries = [
    "Afganistán",
    "Albania",
    "Alemania",
    "Andorra",
    "Angola",
    "Antigua y Barbuda",
    "Arabia Saudita",
    "Argelia",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaiyán",
    "Bahamas",
    "Barbados",
    "Baréin",
    "Bélgica",
    "Belice",
    "Benín",
    "Bielorrusia",
    "Birmania",
    "Bolivia",
    "Bosnia y Herzegovina",
    "Botswana",
    "Brasil",
    "Brunéi",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Bután",
    "Cabo Verde",
    "Camboya",
    "Camerún",
    "Canadá",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoras",
    "Congo",
    "Corea del Norte",
    "Corea del Sur",
    "Costa Rica",
    "Croacia",
    "Cuba",
    "Chipre",
    "República Checa",
    "Dinamarca",
    "Dominica",
    "República Dominicana",
    "Ecuador",
    "Egipto",
    "El Salvador",
    "Emiratos Árabes Unidos",
    "Ecuador",
    "Eslovaquia",
    "Eslovenia",
    "España",
    "Estados Unidos",
    "Estonia",
    "Etiopía",
    "Fiji",
    "Filipinas",
    "Finlandia",
    "Francia",
    "Gabón",
    "Gambia",
    "Georgia",
    "Alemania",
    "Ghana",
    "Granada",
    "Grecia",
    "Guatemala",
    "Guinea",
    "Guinea-Bisáu",
    "Guinea Ecuatorial",
    "Guyana",
    "Haití",
    "Honduras",
    "Hungría",
    "India",
    "Indonesia",
    "Irán",
    "Iraq",
    "Irlanda",
    "Islas Marshall",
    "Islas Salomón",
    "Islandia",
    "Italia",
    "Jamaica",
    "Japón",
    "Jordania",
    "Kazajistán",
    "Kenia",
    "Kirguistán",
    "Kiribati",
    "Kuwait",
    "Laos",
    "Letonia",
    "Líbano",
    "Lesoto",
    "Liberia",
    "Libia",
    "Liechtenstein",
    "Lituania",
    "Luxemburgo",
    "Madagascar",
    "Malasia",
    "Malawi",
    "Maldivas",
    "Malí",
    "Malta",
    "Marruecos",
    "Mauricio",
    "Mauritania",
    "México",
    "Micronesia",
    "Moldavia",
    "Mónaco",
    "Mongolia",
    "Montenegro",
    "Marruecos",
    "Mozambique",
    "Namibia",
    "Nauru",
    "Nepal",
    "Nicaragua",
    "Níger",
    "Nigeria",
    "Noruega",
    "Nueva Zelanda",
    "Omán",
    "Países Bajos",
    "Pakistán",
    "Palaú",
    "Panamá",
    "Papúa Nueva Guinea",
    "Paraguay",
    "Perú",
    "Polonia",
    "Portugal",
    "Qatar",
    "Rumanía",
    "Rusia",
    "Ruanda",
    "San Cristóbal y Nieves",
    "San Marino",
    "Santa Lucía",
    "Santa Sede",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leona",
    "Singapur",
    "Siria",
    "Somalia",
    "Sri Lanka",
    "Sudán",
    "Sudán del Sur",
    "Suecia",
    "Suiza",
    "Surinam",
    "Tailandia",
    "Tanzania",
    "Timor Oriental",
    "Togo",
    "Tonga",
    "Trinidad y Tobago",
    "Túnez",
    "Turkmenistán",
    "Turquía",
    "Tuvalu",
    "Ucrania",
    "Uganda",
    "Uruguay",
    "Uzbekistán",
    "Vanuatu",
    "Vaticano",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabue",
  ];
  return (
    <section className="container-formularios">
      <h1 className="titulo-formularios">Validación de Formularios</h1>
      <form
        action=""
        className="formulario rosa"
        onSubmit={formik.handleSubmit}
      >
        <h1>{datosRosa === null ? "Formulario 1" : datosRosa.titulo}</h1>
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
          <span className="datos-form-rosa-listo">
            {datosRosa === null || typeof datosRosa.celular === "string"
              ? "sin numero"
              : datosRosa.celular}
          </span>
        </label>
        <input
          type="tel"
          id="celular-rosa"
          className="desactivador-rosa"
          name="celular"
          placeholder="+56*********"
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
          <span className="datos-form-rosa-listo">
            {datosRosa === null ? "indefinido" : datosRosa.genero}
          </span>
        </label>
        <select
          value={formik.values.genero}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="genero"
          className="desactivador-rosa"
        >
          <option value={""}>Selecciona...</option>
          <option value={"hombre"}>Hombre</option>
          <option value={"mujer"}>Mujer</option>
          <option value={"Otro tipo de genero"}>Otro</option>
        </select>
        <label htmlFor="comentarios">
          Comentarios:
          {formik.errors.comentario && formik.touched.comentario && (
            <div className="error-yup">{formik.errors.comentario}</div>
          )}
          <span className="datos-form-rosa-listo">
            {datosRosa === null ? "indefinido" : datosRosa.comentario}
          </span>
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
      <form
        action=""
        className="formulario verde"
        onSubmit={formikVerde.handleSubmit}
      >
        <h1 style={{ color: datosVerde === null ? "inherit" : "lime" }}>
          {datosVerde === null ? "Formulario 2" : datosVerde.titulo}
        </h1>
        <div className="container-exitoso-verde">
          <div className="item-exitoso-verde">
            Compañia:
            <span>{datosVerde != null ? datosVerde.compañia : ""}</span>
          </div>
          <div className="item-exitoso-verde">
            Pais:<span>{datosVerde != null ? datosVerde.pais : ""}</span>
          </div>
          <div className="item-exitoso-verde">
            Celular:<span>{datosVerde != null ? datosVerde.celular : ""}</span>
          </div>
          <div className="item-exitoso-verde">
            Correo:<span>{datosVerde != null ? datosVerde.correo : ""}</span>
          </div>
          <div className="item-exitoso-verde">
            Terminos y condiciones:
            <ul className="container-reglas-aceptadas">
            <li>{datosVerde != null ? datosVerde.reglamentos[0] : ""}</li>
            <li>{datosVerde != null ? datosVerde.reglamentos[1] : ""}</li>
            </ul>
          </div>
          <div className="item-exitoso-verde">
            Atención:
            <span>{datosVerde != null ? datosVerde.atencion : ""}</span>
          </div>
        </div>
        <div className="grid-container-form-verde">
          <div className="grid-item-form-verde compañia">
            <label className="label-titulo" htmlFor="compañia">
              COMPAÑÍA{" "}
              {formikVerde.errors.compañia && formikVerde.touched.compañia && (
                <span>{formikVerde.errors.compañia}</span>
              )}
            </label>
            <input
              placeholder="nombre de la compañia"
              className="input-verde"
              name="compañia"
              value={formikVerde.values.compañia}
              onChange={formikVerde.handleChange}
              onBlur={formikVerde.handleBlur}
              type="text"
            />
          </div>
          <div className="grid-item-form-verde pais">
            <label className="label-titulo">
              PAIS
              {formikVerde.errors.pais && formikVerde.touched.pais && (
                <span>{formikVerde.errors.pais}</span>
              )}
            </label>
            <select
              name="pais"
              onChange={formikVerde.handleChange}
              onBlur={formikVerde.handleBlur}
            >
              {countries.map((pais,index) => (
                <option value={pais} key={index}>{pais}</option>
              ))}
            </select>
          </div>
          <div className="grid-item-form-verde numero">
            <label className="label-titulo" htmlFor="celular">
              CELULAR{
                formikVerde.errors.celular && formikVerde.touched.celular && (<span>{formikVerde.errors.celular}</span>)
              }
            </label>
            <input
              placeholder="numero movil +56******"
              className="input-verde"
              type="tel"
              pattern="\+56\{9}"
              name="celular"
              value={formikVerde.values.celular}
              onChange={formikVerde.handleChange}
              onBlur={formikVerde.handleBlur}
            />
          </div>
          <div className="grid-item-form-verde correo">
            <label className="label-titulo" htmlFor="correo">
              CORREO{
                formikVerde.errors.correo && formikVerde.touched.correo && (<span>{formikVerde.errors.correo}</span>)
              }
            </label>
            <input
              placeholder="tu correo"
              className="input-verde"
              name="correo"
              type="email"
              value={formikVerde.values.correo}
              onChange={formikVerde.handleChange}
              onBlur={formikVerde.handleBlur}
            />
          </div>
          <div className="grid-item-form-verde atencion">
            <h5 className="titulo-atencion">Calidad de atención:</h5>
            <label>
              <input
                type="radio"
                value="muy mala"
                name="atencion"
                onChange={formikVerde.handleChange}
                checked={formikVerde.values.atencion === "muy mala"}
              />
              muy mala
            </label>
            <label>
              <input
                type="radio"
                value="mala"
                name="atencion"
                onChange={formikVerde.handleChange}
                checked={formikVerde.values.atencion === "mala"}
              />
              mala
            </label>
            <label>
              <input
                type="radio"
                value="buena"
                name="atencion"
                onChange={formikVerde.handleChange}
                checked={formikVerde.values.atencion === "buena"}
              />
              buena
            </label>
            <label>
              <input
                type="radio"
                value="muy buena"
                name="atencion"
                onChange={formikVerde.handleChange}
                checked={formikVerde.values.atencion === "muy buena"}
              />
              muy buena
            </label>
          </div>
          <div className="grid-item-form-verde reglamento1">
            <input
              type="checkbox"
              name="reglamentos"
              value="reglamento 1 aceptado"
              onChange={formikVerde.handleChange}
              onBlur={formikVerde.handleBlur}
              checked={formikVerde.values.reglamentos.includes(
                "reglamento 1 aceptado"
              )}
            />
            <label className="reglamentos">
              Aceptar Reglamentos y condiciones uno
            </label>
          </div>
          <div className="grid-item-form-verde reglamento2">
            <input
              type="checkbox"
              name="reglamentos"
              value="reglamento 2 aceptado"
              onChange={formikVerde.handleChange}
              onBlur={formikVerde.handleBlur}
              checked={formikVerde.values.reglamentos.includes(
                "reglamento 2 aceptado"
              )}
            />
            <label className="reglamentos">
              Aceptar Reglamentos y condiciones dos
            </label>
          </div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </section>
  );
};
