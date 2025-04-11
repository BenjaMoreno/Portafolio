import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Card,
  CircularProgress,
  Typography,
  Avatar,
  Chip,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import CloudIcon from "@mui/icons-material/Cloud";

const ApiCard = ({ datosEstaticos, onSearch }) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Estilos de resultados de la lista
  const listStyle = {
    fontFamily: "var(--fuente-poopins)",
    fontWeight: 200,
    color: "#ffffff",
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) {
      setError("Por favor ingresa un término de búsqueda");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const result = await onSearch(input);

      // Manejo de errores para clima
      if (result.cod && result.cod !== 200) {
        throw new Error(result.message || "Ciudad no encontrada");
      }

      // Manejo de errores para Pokémon
      if (result.error) {
        throw new Error("Pokémon no encontrado");
      }

      setData(result);
    } catch (error) {
      console.error("API Error:", error);
      setError(error.message || "Ocurrió un error al buscar los datos");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const renderWeatherData = () => (
    <Box sx={{ mt: 2, color: "white" }}>
      <Typography variant="h6" gutterBottom>
        Clima en {data.name}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {data.weather?.[0]?.icon && (
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt={data.weather[0].description}
            style={{ width: 100, height: 100 }}
          />
        )}
        <Box>
          <Typography sx={{ fontWeight: 700, color: "#FFDB58" }}>
            <strong style={listStyle}>Temperatura:&nbsp;&nbsp;</strong>{" "}
            {Math.round(data.main?.temp)}°C
          </Typography>
          <Typography sx={{ fontWeight: 700, color: "#FFDB58" }}>
            <strong style={listStyle}>Sensación térmica:&nbsp;&nbsp;</strong>{" "}
            {Math.round(data.main?.feels_like)}°C
          </Typography>
          <Typography sx={{ fontWeight: 700, color: "#FFDB58" }}>
            <strong style={listStyle}>Humedad:&nbsp;&nbsp;</strong>{" "}
            {data.main?.humidity}%
          </Typography>
          <Typography sx={{ fontWeight: 700, color: "#FFDB58" }}>
            <strong style={listStyle}>Condición:&nbsp;&nbsp;</strong>{" "}
            {data.weather?.[0]?.description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  const renderPokemonData = () => (
    <Box sx={{ mt: 2, color: "white" }}>
      <Typography variant="h6" gutterBottom>
        {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
      </Typography>
      <Box
        sx={{ display: "flex", alignItems: "center", gap: 4, flexWrap: "wrap" }}
      >
        {data.sprites?.front_default && (
          <Avatar
            src={data.sprites.front_default}
            alt={data.name}
            sx={{ width: 100, height: 100 }}
            variant="square"
          />
        )}
        <Box>
          <Typography sx={{ fontWeight: 700, color: "#FFDB58" }}>
            <strong style={listStyle}>Altura:&nbsp;&nbsp;</strong>{" "}
            {data.height / 10}m
          </Typography>
          <Typography sx={{ fontWeight: 700, color: "#FFDB58" }}>
            <strong style={listStyle}>Peso:&nbsp;&nbsp;</strong>{" "}
            {data.weight / 10}kg
          </Typography>
          <Typography sx={{ fontWeight: 700, color: "#FFDB58" }}>
            <strong style={listStyle}>Habilidades:&nbsp;&nbsp;</strong>
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mt: 1, flexWrap: "wrap" }}>
            {data.abilities?.map((ability, index) => (
              <Chip
                key={index}
                label={ability.ability?.name}
                color="secondary"
                size="small"
              />
            ))}
          </Box>
          <Typography sx={{ mt: 2 }}>
            <strong style={listStyle}>Tipos:</strong>
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              mt: 1,
              flexWrap: "wrap",
            }}
          >
            {data.types?.map((type, index) => (
              <Chip
                key={index}
                label={type.type?.name}
                color="primary"
                size="small"
                fontWeight="900"
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Card
      sx={{
        px: { xs: 0, sm: 0, md: 10, lg: 20 },
        m: "5vh auto",
        bgcolor: "transparent",
        width: "100%",
        boxShadow: "none",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {datosEstaticos.img}
        <Typography
          variant="h5"
          sx={{
            fontFamily: "var(--fuente-poopins)",
            fontSize: { xs: "1rem", sm: "1.6rem", md: "2rem", lg: "2rem" },
            minWidth: "max-content",
          }}
        >
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
            m: { xs: "6px auto", sm: "6px auto", md: "10px 0", lg: "15px 0" },
            display: "block",
            width: { xs: "100%", sm: "100%", md: "70%", lg: "40%" },
            backgroundColor: "rgba(163, 163, 163, 0.07)",
            borderRadius: "4px",
            "& .MuiInputLabel-root": {
              color: "rgba(224, 224, 224, 0.56)",
              fontFamiliy: "var(--fuente-poopins)",
              fontWeight: 100,
              fontStyle: "italic",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#1976D2",
            },
            "& .MuiInputBase-input::placeholder": {
              color: "rgba(224, 224, 224, 0.56)",
              opacity: 1,
              fontWeight: 100,
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          disabled={loading || !input.trim()}
          sx={{
            m: { xs: "auto", sm: 0, md: "10px 0" },
            display: "block",
            bgcolor: datosEstaticos.btnColor,
          }}
        >
          {loading ? <CircularProgress size={24} /> : "Buscar"}
        </Button>
      </form>

      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}

      {loading && (
        <CircularProgress sx={{ display: "block", mx: "auto", my: 2 }} />
      )}

      {data &&
        (datosEstaticos.titulo.includes("clima")
          ? renderWeatherData()
          : renderPokemonData())}
    </Card>
  );
};

// Data estatica
const staticData = {
  clima: {
    titulo: "Consulta el clima",
    placeHolder: "Escribe una ciudad",
    img: (
      <CloudIcon
        style={{
          height: "50px",
          width: "auto",
          color: "white",
          margin: "0 10px",
          filter: "drop-shadow(0 0 5px rgba(153, 200, 246, 0.45))",
        }}
      />
    ),
    btnColor: "rgba(163, 163, 163, 0.137)",
  },
  pokemon: {
    titulo: "¿Conoces algún Pokémon?",
    placeHolder: "Escribe su nombre o número",
    img: (
      <CatchingPokemonIcon
        style={{
          height: "50px",
          width: "auto",
          color: "white",
          margin: "0 10px",
          filter: "drop-shadow(0 0 5px rgba(226, 17, 17, 0.73))",
        }}
      />
    ),
    btnColor: "rgba(163, 163, 163, 0.137)",
  },
};

// Componente principal
export const Apis = () => {
  const searchPokemon = async (query) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`
      );
      if (!response.ok) {
        throw new Error("Pokémon no encontrado");
      }
      return await response.json();
    } catch (error) {
      return { error: true, message: error.message };
    }
  };

  const searchWeather = async (query) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=48b3b91bb4714861f439051fc263fcfa`
      );
      return await response.json();
    } catch (error) {
      return { error: true, message: error.message };
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <ApiCard onSearch={searchWeather} datosEstaticos={staticData.clima} />
      <ApiCard onSearch={searchPokemon} datosEstaticos={staticData.pokemon} />
    </Box>
  );
};
