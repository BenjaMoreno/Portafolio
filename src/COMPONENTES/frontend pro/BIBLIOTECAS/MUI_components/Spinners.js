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
      <h3 style={{ textAlign: "center" }}>Cargando aplicación</h3>
    </div>
  );
};
