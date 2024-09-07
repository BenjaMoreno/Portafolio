import React from "react";
import "./ComposR.css";
import { Reutilizable } from "./Reutilizable";
import cowboy from '../../../IMAGES/SVG/COWBOY.svg';
import cold from '../../../IMAGES/SVG/COLD.svg';
import happy from '../../../IMAGES/SVG/HAPPY.svg';
import monkey from '../../../IMAGES/SVG/MONKEY.svg';

export const ComposR = () => {
    const estilosCompos={
        compo1:{fondo:'#FF5733',numero:'1',emoji:cowboy},
        compo2:{fondo:'#33FF57',numero:'2',emoji:monkey},
        compo3:{fondo:'#33C3FF',numero:'3',emoji:cold},
        compo4:{fondo:'#FFFF33',numero:'4',emoji:happy},
    }
  return (
    <section className="container-compos-reutilizables">
      <h1 className="titulo-secciones">Componentes Reutilizables</h1>
      <div className="container-compos">
        <Reutilizable estilo={estilosCompos.compo1}/>
        <Reutilizable estilo={estilosCompos.compo2}/>
        <Reutilizable estilo={estilosCompos.compo3}/>
        <Reutilizable estilo={estilosCompos.compo4}/>
      </div>
    </section>
  );
};






















