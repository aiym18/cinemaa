import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../Api";
import MovieCart from "../MovieCart";
import { useParams } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState([]);
  const { nameMovie } = useParams();
  const getSearch = (key) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${nameMovie}`
      )
      .then((res) => setSearch(res.data.results));
  };
  useEffect(() => {
    getSearch(API_KEY);
  }, [nameMovie]);
  return (
    <div id="popular">
      <div className="container">
        <div className="popular">
          {search.map((el) => (
            <MovieCart movie={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
