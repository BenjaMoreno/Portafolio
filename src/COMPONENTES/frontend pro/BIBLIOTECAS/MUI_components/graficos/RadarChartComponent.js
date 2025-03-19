import React, { useEffect } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Matemáticas",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Frances",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Ingles",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Geografía",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Física",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "Historia",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const RadarChartComponent = () => {
  // Función para calcular el tamaño de la fuente en función del ancho de la pantalla
  const calculateFontSize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 600) {
      return 12; // Tamaño pequeño para pantallas pequeñas
    } else if (screenWidth >= 600 && screenWidth < 900) {
      return 16; // Tamaño mediano para pantallas medianas
    } else {
      return 18; // Tamaño grande para pantallas grandes
    }
  };
  const fontSize = calculateFontSize();
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis tick={{ fontSize: fontSize }} dataKey="subject" />
        <PolarRadiusAxis
          tick={{ fontSize: fontSize }}
          angle={30}
          domain={[0, 150]}
        />
        <Radar
          name="Benja"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar
          name="IA"
          dataKey="B"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartComponent; // Exporta como RadarChartComponent
