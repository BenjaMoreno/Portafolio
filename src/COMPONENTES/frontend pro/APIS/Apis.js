import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Card,
  CircularProgress,
  Typography,
} from "@mui/material";
// import { ReactComponent as Weather } from "../../../IMAGES/SVG/WEATHER.svg";
// import { ReactComponent as Pokeball } from "../../../IMAGES/SVG/POKEBALL.svg";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import CloudIcon from "@mui/icons-material/Cloud"; // Componente reutilizable simplificado
const ApiCard = ({ datosEstaticos, onSearch }) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await onSearch(input);
      const resultString = JSON.stringify(result);
      setData(resultString);
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      sx={{
        px: {
          xs: 0,
          sm: 0,
          md: 10,
          lg: 20,
        },
        // m: {
        //   xs: "5vh auto",
        //   sm: "5vh auto 5vh 5vw",
        // },
        m: "5vh auto",
        bgcolor: "transparent",
        width: "100%",
        boxShadow: "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          // justifyContent: "space-between",
        }}
      >
        {datosEstaticos.img}
        <Typography
          variant="h5"
          sx={{
            fontFamily: "var(--fuente-poopins)",
            fontSize: {
              xs: "1rem",
              sm: "1.6rem",
              md: "2rem",
              lg: "2rem",
            },
            minWidth: "max-content",
          }}
        >
          {" "}
          {datosEstaticos.titulo}
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <TextField
          label={datosEstaticos.placeHolder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          size="small"
          fullWidth
          sx={{
            mb: 1,
            m: {
              xs: "6px auto",
              sm: "6px auto",
              md: "10px 0",
              lg: "15px 0",
              xl: "15px 0",
            },
            display: "block",
            width: {
              xs: "100%",
              sm: "100%",
              md: "70%",
              lg: "40%",
            },
            backgroundColor: "rgba(163, 163, 163, 0.07)",
            borderRadius: "4px",
            "& .MuiInputLabel-root": {
              color: "rgba(224, 224, 224, 0.56)", // Color del label cuando no está enfocado,
              fontFamiliy: "var(--fuente-poopins)",
              fontWeight: 100,
              fontStyle: "italic",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#1976D2", // Color del label cuando está enfocado
            },
            "& .MuiInputBase-input::placeholder": {
              color: "rgba(224, 224, 224, 0.56)", // Color del placeholder
              opacity: 1, // Asegura que el color se aplique completamente
              fontWeight: 100,
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          disabled={loading}
          sx={{
            m: {
              xs: "auto",
              sm: 0,
              md: "10px 0",
            },
            display: "block",
            bgcolor: datosEstaticos.btnColor,
          }}
        >
          {loading ? <CircularProgress size={24} /> : "Buscar"}
        </Button>
      </form>
      {data && (
        <pre style={{ marginTop: 10 }}>
          <Box sx={{}}></Box>
          {data}
        </pre>
      )}
    </Card>
  );
};

// Data estatica
const staticData = {
  clima: {
    titulo: "Consulta el clima",
    placeHolder: "escribe una ciudad",
    img: (
      <CloudIcon
        style={{
          height: "50px",
          width: "auto",
          color: "white",
          margin: "0 10px",
          filter: "drop-shadow(0 0 5px rgb(153, 199, 246))",
        }}
      />
    ),
    btnColor: "rgba(163, 163, 163, 0.137)",
  },
  pokemon: {
    titulo: "¿Conoces algún Pókemon?",
    placeHolder: "escribe su nombre",
    img: (
      <CatchingPokemonIcon
        style={{
          height: "50px",
          width: "auto",
          color: "white",
          margin: "0 10px",
          filter: "drop-shadow(0 0 5px rgb(226, 17, 17))",
        }}
      />
    ),
    btnColor: "rgba(163, 163, 163, 0.137)",
  },
};

// Componente principal
export const Apis = () => {
  // Ejemplo de funciones de búsqueda (reemplaza con tus APIs reales)
  const searchPokemon = async (query) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
    return await response.json();
  };

  const searchWeather = async (query) => {
    // Reemplaza con tu API key real
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=48b3b91bb4714861f439051fc263fcfa`
    );
    return await response.json();
  };

  return (
    <Box sx={{ p: 2 }}>
      <ApiCard onSearch={searchWeather} datosEstaticos={staticData.clima} />
      <ApiCard onSearch={searchPokemon} datosEstaticos={staticData.pokemon} />
      {/* Agrega más ApiCards según necesites */}
    </Box>
  );
};

// import React from "react";
// import "./Apis.css";
// import { PokeApi } from "./POKEAPI/PokeApi";
// import { OpenWeather } from "./OPEN WEATHER MAP/OpenWeather";
// // import { News } from "./NEWS API/News";

// export const Apis = () => {
//   return (
//     <section className="container-apis">
//       <article className="info-api">
//         {/* <h1 className="titulo-habilidad ">Consumo de APIS</h1> */}

//         <div className="api-elemento">
//           <OpenWeather />
//         </div>

//         <div className="api-elemento">
//           <PokeApi />
//         </div>

//         {/* <div className="api-elemento fondo-noticias">
//           <News />
//         </div> */}
//       </article>
//     </section>
//   );
// };
