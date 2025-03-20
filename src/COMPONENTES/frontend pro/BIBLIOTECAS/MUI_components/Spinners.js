import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";

export const Spinners = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress size="80px" />
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontSize: {
            xs: "1.2rem",
            sm: "1.2rem ",
            md: "2rem",
            lg: "2rem",
            xl: "2rem",
          },
          fontFamily: "var(--fuente-poopins)",
          my: 2,
        }}
      >
        Cargando aplicación
      </Typography>
    </div>
  );
};
