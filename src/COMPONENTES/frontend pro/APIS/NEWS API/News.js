import React, { useEffect, useState } from "react";
import "./News.css";
import news_icon from "../../../../IMAGES/SVG/NEWS.svg";
export const News = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const consultarNews = () => {
      const url =
        "https://api.worldnewsapi.com/top-news?source-country=us&language=en&date=2024-05-29";
      const apiKey = "0d9c07c2f4f34493a417f083b652d606";

      fetch(url, {
        method: "GET",
        headers: {
          "x-api-key": apiKey,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          const newsArray = data.top_news[0].news;
          console.log(newsArray);
          setNoticias(newsArray);
        })
        .catch((error) =>
          console.error("There was a problem with the fetch operation:", error)
        );
    };
    consultarNews();
  }, []);

  return (
    <article className="container-news-main">
      <h1 className="titulo-news">
        Noticias principales y actuales en Estados Unidos
      </h1>
      <div className="news-container">
        {noticias.slice(0, 4).map((noticia, index) => (
          <div className="new-item" key={index}>
            <h1>{noticia.author || "Autor desconocido"}</h1>
            <img
              src={noticia.image === null ? news_icon : noticia.image}
              alt={""}
            />
            <h5>
              <span>fecha de publicación:&nbsp;&nbsp;</span>
              {new Date(noticia.publish_date).toLocaleDateString()}
            </h5>
            <p>{noticia.title}</p>
          </div>
        ))}
      </div>
    </article>
  );
};
