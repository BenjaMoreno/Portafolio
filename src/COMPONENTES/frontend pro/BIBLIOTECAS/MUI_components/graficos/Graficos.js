import * as React from "react";
import { Box } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavLink, Outlet } from "react-router-dom";
import area from "../../../../../IMAGES/iconos/area-chart.png";
import radar from "../../../../../IMAGES/iconos/radar-chart.png";

// Cambio 1: Aseguré que el menú tenga un z-index alto y posición fija
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
    backgroundColor: "transparent",
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
];

export const Graficos = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden", // Cambio 2: Evita que el contenido se desplace
      }}
    >
      <Box sx={{ position: "absolute", right: "2%", top: "2%", zIndex: 1000 }}>
        <Button
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
        >
          Tipos
        </Button>

        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          disableScrollLock // Cambio 3: Evita que el menú bloquee el scroll
        >
          {enlaces.map((enlace) => (
            <NavLink
              to={enlace.link}
              key={enlace.label} // Cambio 4: Agregué una clave única
              style={{ display: "block", textDecoration: "none" }} // Cambio 5: Aseguré que el NavLink no afecte el layout
            >
              <MenuItem onClick={handleClose} disableRipple>
                <img src={enlace.icono} alt="" style={{ margin: "0 10px" }} />
                {enlace.label}
              </MenuItem>
            </NavLink>
          ))}
        </StyledMenu>
      </Box>
      <Outlet style={{ zIndex: 0 }} />
    </Box>
  );
};
