import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../../Api";
import MovieCart from "../MovieCart";
import loding from "../../img/Spinner-1s-200px.svg";

const TopReated = () => {
  const [popular, setPopular] = useState([]);
  const [count, setCount] = useState(1);
  const getPopular = (key) => {
    setPopular([])
    window.scroll(0, 0);
    setTimeout(() => {
      axios(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=${count}`
        
      ).then((res) => setPopular(res.data.results));
    }, 2000);
  };
  console.log(popular);
  useEffect(() => {
    getPopular(API_KEY);
  }, [count]);

  return (
    <div id="popular">
      <div className="container">
        {!popular.length ? (
          <div className="loging">
            <img src={loding} alt="" />
          </div>
        ) : (
          <>
            <div className="popular">
              {popular.map((el) => (
                <MovieCart movie={el} />
              ))}
            </div>
            <div className="pogination">
              <div
                onClick={() => setCount(count > 1 ? count - 1 : count)}
                className="pogination--left"
              >
                Back
              </div>
              <h1>{count}</h1>
              <div
                onClick={() => setCount(count + 1)}
                className="pogination--right"
              >
                Next
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TopReated ;
