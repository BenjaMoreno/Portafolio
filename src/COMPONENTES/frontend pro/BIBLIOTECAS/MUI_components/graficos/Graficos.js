import * as React from "react";
import { Box } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavLink, Outlet } from "react-router-dom";
import area from "../../../../../IMAGES/iconos/area-chart.png";
import radar from "../../../../../IMAGES/iconos/radar-chart.png";
import compuesto from "../../../../../IMAGES/iconos/composed-chart.png";
import torta from "../../../../../IMAGES/iconos/pie-chart.png";

// Estilos personalizados para el menú
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
    sx={{ zIndex: 1300, position: "fixed" }} // Menú fijo y con z-index alto
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: "white",
    backgroundColor: "#0b2545",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
    ...theme.applyStyles("dark", {
      color: theme.palette.grey[300],
    }),
  },
}));

const enlaces = [
  { label: "area", link: "areas", icono: area },
  { label: "radar", link: "radar", icono: radar },
  { label: "compuesto", link: "compuesto", icono: compuesto },
  { label: "torta", link: "torta", icono: torta },
];

export const Graficos = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [opcionSeleccionada, setOpcionSeleccionada] = React.useState("Tipos");
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (label) => {
    setOpcionSeleccionada(label); // Actualiza la opción seleccionada
    handleClose(); // Cierra el menú
  };

  return (
    <Box
      sx={{
        position: "relative",
        border: "solid white 1px",
        width: "100%",
        height: "100%",
        // overflow: "hidden", // Evita que el contenido se desplace
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          zIndex: 1000,
        }}
      >
        <Button
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
          sx={{
            backgroundColor: "#0b2545", // Cambia el color de fondo
            color: "white", // Cambia el color del texto
            "&:hover": {
              backgroundColor: "#13315c", // Cambia el color de fondo al pasar el mouse
            },
            position: "absolute",
            right: 0,
            top: 0,
            minWidth: "max-content",
          }}
        >
          {opcionSeleccionada}
        </Button>

        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          disableScrollLock // Evita que el menú bloquee el scroll
        >
          {enlaces.map((enlace) => (
            <NavLink
              to={enlace.link}
              key={enlace.label}
              style={{
                textDecoration: "none",
                color: "inherit",
              }} // Estilo para el NavLink
            >
              <MenuItem
                onClick={() => handleMenuItemClick(enlace.label)}
                disableRipple
                sx={{ m: 1 }}
              >
                <img src={enlace.icono} alt="" style={{ margin: "0 10px" }} />
                {enlace.label}
              </MenuItem>
            </NavLink>
          ))}
        </StyledMenu>
      </Box>
      <Box
        sx={{
          height: "100%",
          maxHeight: "100%",
          width: "100%",
          // m: "40px 0 0 0",
        }}
      >
        <Outlet /> {/* Renderiza las rutas anidadas */}
      </Box>
    </Box>
  );
};
