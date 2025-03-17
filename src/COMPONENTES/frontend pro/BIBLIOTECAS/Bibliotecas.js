import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { NavLink } from "react-router-dom";
// import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import InsightsIcon from "@mui/icons-material/Insights";
import DataSaverOffOutlinedIcon from "@mui/icons-material/DataSaverOffOutlined";
import CoPresentOutlinedIcon from "@mui/icons-material/CoPresentOutlined";
import TabIcon from "@mui/icons-material/Tab";
import "./Bibliotecas.css";
const drawerWidth = 240;

function Bibliotecas(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <List>
        {[
          {
            label: "Graficos interactivos",
            link: "graficos",
            icono: (
              <InsightsIcon
                style={{
                  color: "white",
                }}
              />
            ),
          },
          {
            label: "Indicadores de carga",
            link: "spinners",
            icono: (
              <DataSaverOffOutlinedIcon
                style={{
                  color: "white",
                }}
              />
            ),
          },
          {
            label: "Tarjetas de presentación",
            link: "tarjetas",
            icono: (
              <CoPresentOutlinedIcon
                style={{
                  color: "white",
                }}
              />
            ),
          },
          {
            label: "Ventanas emergentes",
            link: "modales",
            icono: (
              <TabIcon
                style={{
                  color: "white",
                }}
              />
            ),
          },
        ].map((text, index) => (
          <NavLink key={index} to={text.link} className="navlink-bibliotecas">
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  {text.icono}
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText
                  primary={text.label}
                  sx={{ fontFamily: "var(--fuente-poppins)" }} // Cambia la fuente aquí
                />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        width: "80vw",
        height: "70vh",
        margin: "5vh auto",
        position: "relative",
        zIndex: 0,
      }}
    >
      {/* Botón para abrir el Drawer en móviles */}
      {/* <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ position: "absolute", left: 10, top: 10, zIndex: 1200 }}
      >
        <MenuIcon />
      </IconButton> */}

      {/* Drawer para móviles */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Drawer para pantallas grandes */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            position: "relative", // Para que no ocupe toda la pantalla
            height: "100%", // Ajusta la altura al contenedor
            backgroundColor: "transparent",
          },
        }}
        open
      >
        {drawer}
      </Drawer>

      {/* Contenido principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

Bibliotecas.propTypes = {
  window: PropTypes.func,
};

export default Bibliotecas;
