import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../Api";
import { LanguageContext } from "../Context";

const Videos = ({ movieId }) => {
  const [video, setVideo] = useState([]);
  const [count, setCount] = useState(3);
  const { dark } = useContext(LanguageContext);

  let getVideos = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}&language=en-US`
    ).then((res) => setVideo(res.data.results));
  };

  useEffect(() => {
    getVideos(API_KEY);
  }, []);

  return (
    <div id="videos">
      <div className="container">
        <div className="videos">
          {video.slice(0, count).map((el) => (
            <iframe
              key={el.id}
              width="480"
              height="254"
              src={`https://www.youtube.com/embed/${el.key}`}
              title={el.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ))}
        </div>

        {video.length === count ? (
          <button
            style={{
              color: dark ? "white" : "",
              border: dark ? "2px solid white" : "",
            }}
            onClick={() => setCount(3)}
          >
            short..
          </button>
        ) : (
          <button
            style={{
              color: dark ? "white" : "",
              border: dark ? "2px solid white" : "",
            }}
            onClick={() => setCount(count + 3)}
          >
            More..
          </button>
        )}
      </div>
    </div>
  );
};

export default Videos;
