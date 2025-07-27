import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../Api";
import { Link } from "react-router-dom";
import Snowfall from "react-snowfall";

const Hero = () => {
  const [background, setBackground] = useState([]);

  const getBackground = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
    ).then((res) => {
      const images = res.data.results.map((el) => el.backdrop_path);
      setBackground(images);
    });
  };

  useEffect(() => {
    getBackground(API_KEY);
  }, []);

  const randomIndex = Math.floor(Math.random() * background.length);
  const bgImage = background[randomIndex];

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${bgImage})`,
      }}
    >
      {/* Снег поверх всей страницы */}
      <Snowfall color="white" snowflakeCount={150} />

      <div className="overlay"></div>
      <div className="container">
        <div className="hero__content">
          <h1>Добро пожаловать</h1>
          <h3>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h3>
          <Link to="/popular"> Начать просмотр</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
