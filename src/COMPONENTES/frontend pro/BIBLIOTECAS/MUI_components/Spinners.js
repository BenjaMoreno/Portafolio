import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";

export const Spinners = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <CircularProgress size="80px" />
      <h3>Cargando aplicación</h3>
    </div>
  );
};
