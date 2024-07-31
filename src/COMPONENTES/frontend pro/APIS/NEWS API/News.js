import React, { useEffect, useState } from "react";
import "./News.css";
import news_icon from "../../../../IMAGES/SVG/NEWS.svg";
export const News = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const consultarNews = async () => {
      const url =
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=1b50ac1a21a7493aa81e780d7f9ea2ee";
      const respuesta = await fetch(url);
      const data = await respuesta.json();
      console.log(data);

      const arrayNoticias = data.articles.slice(0, 4).map((article) => ({
        autor: article.author,
        img: article.urlToImage,
        fecha: article.publishedAt,
        p: article.title,
      }));
      setNoticias(arrayNoticias);
    };
    consultarNews();
  }, []);

  return (
    <article className="container-news-main">
      <h1 className="titulo-news">
        Noticias principales y actuales en Estados Unidos
      </h1>
      <div className="news-container">
        {noticias.map((noticia, index) => (
          <div className="new-item" key={index}>
            <h1>{noticia.autor || "Autor desconocido"}</h1>
            <img
              src={noticia.img === null ? news_icon : noticia.img}
              alt={noticia.titulo}
            />
            <h5>
              <span>fecha de publicación:&nbsp;&nbsp;</span>
              {new Date(noticia.fecha).toLocaleDateString()}
            </h5>
            <p>{noticia.p}</p>
          </div>
        ))}
      </div>
    </article>
  );
};
