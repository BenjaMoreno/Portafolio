import { useState } from "react";
import "./Formulario.css";
import { useForm } from "react-hook-form";
import { SlRefresh } from "react-icons/sl";

export const Formulario = () => {
  const [datosForm, setDatosForm] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setDatosForm(data);
  };

  return (
    <section className="container-formulario">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container-form-response"
      >
        <h4>Formulario</h4>
        {/* Campo de nombre */}
        <input
          {...register("nombre", {
            required: "Nombre es requerido",
            minLength: { value: 4, message: "Mínimo 4 letras" },
            maxLength: { value: 15, message: "Máximo 15 letras" },
          })}
          placeholder="Nombre"
        />
        {errors.nombre && <small>{errors.nombre.message}</small>}

        {/* Campo de apellido */}
        <input
          {...register("apellido", {
            required: "Apellido es requerido",
            minLength: { value: 4, message: "Mínimo 4 letras" },
            maxLength: { value: 15, message: "Máximo 15 letras" },
          })}
          placeholder="Apellido"
        />
        {errors.apellido && <small>{errors.apellido.message}</small>}

        {/* Campo de correo */}
        <input
          {...register("correo", { required: "Correo es requerido" })}
          type="email"
          placeholder="Correo"
        />
        {errors.correo && <small>{errors.correo.message}</small>}

        {/* Campo de celular */}
        <input
          {...register("celular", {
            required: "Tu celular es necesario para comunicarnos contigo",
            pattern: {
              value: /^[0-9]{11}$/,
              message: "Número inválido (debe tener 11 dígitos sin el +)",
            },
          })}
          type="tel"
          placeholder="Celular"
        />
        {errors.celular && <small>{errors.celular.message}</small>}

        {/* Campo de género (select) */}
        <select {...register("genero", { required: "Tu género es requerido" })}>
          <option value="">Selecciona tu género</option>{" "}
          {/* Opción por defecto */}
          <option value="Mujer">Mujer</option>
          <option value="Hombre">Hombre</option>
          <option value="Otro">Otro</option>
        </select>
        {errors.genero && <small>{errors.genero.message}</small>}

        {/* Campo de recruiter (radio) */}
        <label>¿Eres recruiter?</label>
        <div className="container-radios">
          <label>
            Si <input {...register("recruiter")} type="radio" value={"Si"} />
          </label>
          <label>
            No <input {...register("recruiter")} type="radio" value={"No"} />
          </label>
        </div>

        {/* Botón de enviar */}
        <button type="submit">Enviar</button>
      </form>
      <div className="container-form-response respuesta">
        <h4>Respuesta</h4>
        {datosForm === null ? (
          <small>No es has completado el formulario</small>
        ) : (
          <ul>
            <li>
              Nombre:&nbsp;&nbsp;<b>{datosForm.nombre}</b>
            </li>
            <li>
              Apellido:&nbsp;&nbsp;<b>{datosForm.apellido}</b>
            </li>
            <li>
              Correo:&nbsp;&nbsp;<b>{datosForm.correo}</b>
            </li>
            <li>
              Celular:&nbsp;&nbsp;<b>+{datosForm.celular}</b>
            </li>
            <li>
              Género:&nbsp;&nbsp;<b>{datosForm.genero}</b>
            </li>
            <li>
              ¿Eres recruiter?:&nbsp;&nbsp;<b>{datosForm.recruiter}</b>
            </li>
          </ul>
        )}
        <SlRefresh
          size={30}
          color="var(--fuente-blanca)"
          className="trash-form"
          title="Limpiar"
          onClick={() => setDatosForm(null)}
        />
      </div>
    </section>
  );
};
