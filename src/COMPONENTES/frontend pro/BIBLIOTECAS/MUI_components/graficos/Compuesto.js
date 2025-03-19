import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: "Page B",
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: "Page E",
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: "Page F",
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];
// Función para calcular el tamaño de la fuente en función del ancho de la pantalla
const calculateFontSize = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth < 600) return 12; // Tamaño pequeño para pantallas pequeñas
  if (screenWidth < 900) return 16; // Tamaño mediano para pantallas medianas
  return 18; // Tamaño grande para pantallas grandes
};

const fontSize = calculateFontSize();
const Compuesto = () => {
  // static demoUrl = 'https://codesandbox.io/p/sandbox/composed-chart-with-axis-label-xykxs9';

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        data={data}
        margin={{
          top: 50,
          right: 1,
          bottom: 0,
          left: -10,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis
          dataKey="name"
          label={{ position: "insideBottomRight", offset: 0 }}
          tick={{ fontSize: fontSize, fill: "#666" }}
          scale="band"
        />
        <YAxis
          label={{ angle: -90, position: "insideLeft" }}
          tick={{ fontSize: fontSize, fill: "#666" }}
        />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};
export default Compuesto;
