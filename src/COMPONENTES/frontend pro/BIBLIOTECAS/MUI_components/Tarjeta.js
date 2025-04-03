import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import paella from "../../../../IMAGES/generales/paella.jpg";
import lagarto from "../../../../IMAGES/generales/contemplative-reptile.jpg";
import vertile from "../../../../IMAGES/generales/vertile.webp";

import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  CardHeader,
  Avatar,
  IconButton,
  Collapse,
  styled,
  Box,
  useTheme,
} from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

// Configuración básica del slider
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

// Componente de la tarjeta tipo 1 (adaptada)
const TarjetaTipo1 = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "0 auto",
      }}
    >
      {" "}
      {/* Centrado horizontal */}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Paella de chorizo y gambas"
        subheader="14 septiembre, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={paella}
        alt="Paella dish"
        loading="lazy" // <-- Añade esto
        width="345"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Esta impresionante paella es el plato perfecto para fiestas y una
          comida divertida para cocinar junto con tus invitados. Añade 1 taza de
          guisantes congelados junto con los mejillones, si lo deseas.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Calienta 1/2 taza del caldo en una olla hasta que comience a hervir
            a fuego lento, añade el azafrán y deja reposar durante 10 minutos.
          </Typography>
          <Typography paragraph sx={{ color: "gray" }}>
            Calienta aceite en una paellera (de 14 a 16 pulgadas) o en una
            sartén grande y profunda a fuego medio-alto. Añade el pollo, las
            gambas y el chorizo, y cocina, revolviendo ocasionalmente, hasta que
            estén ligeramente dorados, de 6 a 8 minutos. Transfiere las gambas a
            un plato grande y resérvalas, dejando el pollo y el chorizo en la
            sartén. Agrega el pimentón, las hojas de laurel, el ajo, los
            tomates, la cebolla, la sal y la pimienta, y cocina, revolviendo con
            frecuencia, hasta que la mezcla espese y esté fragante, unos 10
            minutos. Incorpora el caldo de azafrán y las 4 1/2 tazas restantes
            de caldo de pollo; lleva a ebullición
          </Typography>
          <Typography paragraph sx={{ color: "gray" }}>
            Añade el arroz y remueve muy suavemente para distribuirlo de manera
            uniforme. Coloca encima las alcachofas y los pimientos, y cocina sin
            remover hasta que la mayor parte del líquido se haya absorbido,
            entre 15 y 18 minutos. Reduce el fuego a medio-bajo, agrega las
            gambas reservadas y los mejillones, colocándolos suavemente dentro
            del arroz, y cocina nuevamente sin remover hasta que los mejillones
            se hayan abierto y el arroz esté tierno, unos 5 a 7 minutos más.
            (Desecha cualquier mejillón que no se haya abierto).
          </Typography>
          <Typography sx={{ color: "gray" }}>
            Retira del fuego y deja reposar durante 10 minutos antes de servir.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

// Nueva tarjeta tipo 2 (adaptada)
const TarjetaTipo2 = () => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "40% auto auto auto",
        transform: "translateY(-50%)",
      }}
    >
      {" "}
      {/* Centrado horizontal */}
      <CardMedia sx={{ height: 140 }} image={lagarto} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lagarto
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Los lagartos son un grupo ampliamente distribuido de reptiles
          escamosos, con más de 6,000 especies, que se encuentran en todos los
          continentes excepto en la Antártida.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Compartir</Button>
        <Button size="small">Leer más</Button>
      </CardActions>
    </Card>
  );
};

// Nueva tarjeta tipo 3 (adaptada)
const TarjetaTipo3 = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        maxWidth: 500,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      {" "}
      {/* Centrado horizontal */}
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            No Sleep
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "text.secondary" }}
          >
            Vertile
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === "rtl" ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === "rtl" ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={vertile}
        alt="Live from space album cover"
      />
    </Card>
  );
};

// Array de tarjetas con sus respectivas props
const tarjetasData = [
  {
    type: TarjetaTipo1,
    props: {}, // No necesita props adicionales
  },
  {
    type: TarjetaTipo2,
    props: {}, // No necesita props adicionales
  },
  {
    type: TarjetaTipo3,
    props: {}, // No necesita props adicionales
  },
];

// Componente principal que contiene el slider
const Tarjeta = () => {
  return (
    <div
      style={{
        width: "80%",
        height: "100%",
        margin: "0 auto",
      }}
    >
      {" "}
      {/* Contenedor centrado */}
      <Slider {...settings}>
        {tarjetasData.map((tarjeta, index) => {
          const Component = tarjeta.type;
          return (
            <div key={index}>
              <Component {...tarjeta.props} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Tarjeta;
