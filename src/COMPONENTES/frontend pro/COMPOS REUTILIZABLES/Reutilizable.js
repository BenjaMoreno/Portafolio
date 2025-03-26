import React from "react";
import "./Reutilizable.css";
import { Typography } from "@mui/material";

export const Reutilizable = ({ estilo }) => {
  return (
    <div className="compo" style={{ backgroundColor: estilo.fondo }}>
      <div className="nombre-compo">
        <Typography
          variant="p"
          sx={{
            fontWeight: {
              xs: 400,
              sm: 400,
              md: 300,
              lg: 300,
              xl: 400,
            },
            fontSize: {
              xs: "1rem",
              sm: "1rem",
              md: "1.4rem",
              lg: "1.4rem",
              xl: "1.6rem",
            },
            fontFamily: "var(--fuente-poopins)",
          }}
        >
          {" "}
          Componente Reutilizable {estilo.numero}
        </Typography>
      </div>
      <div className="container-emoji">
        <img src={estilo.emoji} />
      </div>
    </div>
  );
};
