import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../Context";

const MovieCart = ({ movie }) => {
  const {dark}=useContext(LanguageContext)

  return (
    <div className="movieCart" style={{color:dark?"white":"",border:dark?"2px solid white":""}}>
      <Link to={`/movieDetalis/${movie.id}`}>
      <img
        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
        alt="img"
      />
      </Link>
      <h1>{movie.title}</h1>
      <h4>{movie.release_date}</h4>
    </div>
  );
};

export default MovieCart;
