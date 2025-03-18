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
import { NavLink } from "react-router-dom";
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
              <ListItemButton onClick={handleDrawerClose}>
                <ListItemIcon>{text.icono}</ListItemIcon>
                <ListItemText primary={text.label} />
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
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{
          position: "absolute",
          left: { xs: 5, sm: 10, md: 15 }, // Ajusta el left según el breakpoint
          top: { xs: 5, sm: 10, md: 15 }, // Ajusta el top según el breakpoint
          zIndex: 1200,
          display: { xs: "block", sm: "none", md: "none" }, // Oculta o muestra según el breakpoint
        }}
      >
        <MenuIcon sx={{ color: "#ffffff" }} />
      </IconButton>
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
            position: "relative",
            height: "100%",
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
