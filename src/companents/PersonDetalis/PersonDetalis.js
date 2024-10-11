import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { API_KEY } from "../../Api";
import newcinema from "../../img/newcenema.jpeg"
import { Link } from "react-router-dom";
import { LanguageContext } from "../Context";

const PersonDetalis = ({ id }) => {
    const {language}=useContext(LanguageContext)

  const [person, setPerson] = useState([]);
  const getPerson = (key) => {
    axios(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=${language}`
    ).then((res) => setPerson(res.data.cast));
  };
  useEffect(() => {
    getPerson(API_KEY);
  }, []);
  return (
    <div id="person">
      <h1>MoviePerson</h1>
      <div className="person">
        {person.map((el) => (
          <div className="person--card">
            <Link to={`/moviedetalis/${id}`}>
            {
                el.poster_path === null?
                <img className="img1" src={newcinema} alt="img" />
                :<img
                src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${el.poster_path}`}
                alt="img"
              />
            }
            </Link>
          <h4>{el.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonDetalis;
