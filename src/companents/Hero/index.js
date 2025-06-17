import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../Api";

const Hero = () => {
  const [background, setBackground] = useState([]);
  const getBackground = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
    ).then((res) => {
      res.data.results.map((el) => setBackground((art)=>[...art,el.backdrop_path]));
    });
  };
  // console.log(background);
  useEffect(() => {
    getBackground(API_KEY);
  }, []);
  return (
    <div
      id="hero "
      style={{
        background: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${background[Math.round(Math.random()*background.length)]})no-repeat center/cover`,
        minHeight: "100vh",
      }}
    >
      <div className="container"> 
        <div className="hero">
          <h1>Добро пожаловать.</h1>
          <h3>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
