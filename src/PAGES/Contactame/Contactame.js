import { Box, Link } from "@mui/material";
import gmail_logo from "../../IMAGES/SVG/GMAIL.svg";
import wsp_logo from "../../IMAGES/SVG/WHATSAPP.svg";
import "./Contactame.css";
const styles = {
  cursor: "pointer",
  textDecoration: "none",
  backgroundColor: "transparent",
  borderRadius: "100px",
  boxSizing: "border-box",
  color: "var(--fuente-blanca)",
  fontFamily: "var(--fuente-poopins)",
  fontSize: "1.2rem",
  width: "300px",
  maxWidth: "70vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const Contactame = () => {
  const email = "webenja0@gmail.com"; // Correo del destinatario
  const subject = "Oferta de trabajo"; // Asunto del correo
  const body = "Hola Benja, me gustaría tener una entrevista contigo..."; // Cuerpo del mensaje

  // Codifica el asunto y el cuerpo del mensaje
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  return (
    <Box
      sx={{
        width: "100vw",
        height: "72vh",
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        },
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Link
        href={`https://mail.google.com/mail/?view=cm&to=${email}&su=${encodedSubject}&body=${encodedBody}`}
        target="_blank" // Abre en una nueva pestaña
        rel="noopener noreferrer" // Mejora la seguridad
        sx={{
          ...styles,
          border: "solid rgb(91, 80, 235) 1px",
          "&:hover": {
            backgroundColor: "#07263D", // Estilo personalizado para Gmail
          },
        }}
      >
        <img src={gmail_logo} style={{ height: "40%" }} alt="" />
        Gmail
      </Link>
      <Link
        href="https://wa.me/56940551892"
        target="blank"
        sx={{
          ...styles,
          border: "solid rgb(91, 80, 235) 1px",
          "&:hover": {
            backgroundColor: "#07263D", // Estilo personalizado para Gmail
          },
        }}
      >
        <img src={wsp_logo} style={{ height: "40%", minWidth: "" }} alt="" />
        Whatsapp
      </Link>
    </Box>
  );
};
