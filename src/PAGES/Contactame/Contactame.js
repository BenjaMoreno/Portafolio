import { Box, Link } from "@mui/material";
import gmail_logo from "../../IMAGES/SVG/GMAIL.svg";
import wsp_logo from "../../IMAGES/SVG/WHATSAPP.svg";
const styles = {
  cursor: "pointer",
  textDecoration: "none",
  backgroundColor: "transparent",
  borderRadius: "100px",
  px: 9,
  color: "var(--fuente-blanca)",
  fontFamily: "var(--fuente-poopins)",
  fontSize: "1.2rem",
};
export const Contactame = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
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
        sx={{
          ...styles,
          border: "solid rgb(91, 80, 235) 1px",
          "&:hover": {
            backgroundColor: "#07263D", // Estilo personalizado para Gmail
          },
        }}
      >
        <img src={gmail_logo} alt="" />
        Gmail
      </Link>
      <Link
        sx={{
          ...styles,
          border: "solid rgb(91, 80, 235) 1px",
          "&:hover": {
            backgroundColor: "#07263D", // Estilo personalizado para Gmail
          },
        }}
      >
        <img src={wsp_logo} alt="" />
        Whatsapp
      </Link>
    </Box>
  );
};
