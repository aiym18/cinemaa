import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../Api";
import userimg from "../../img/userP.png"
import { Link } from "react-router-dom";
import { LanguageContext } from "../Context";


const People = ({ movieId }) => {
  const [people, setPeople] = useState([]);
  const {language}=useContext(LanguageContext)
  const {dark}=useContext(LanguageContext)
  const getPeople = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=${language}`
    ).then((res) => setPeople(res.data.cast));
  };
  useEffect(() => {
    getPeople(API_KEY);
  }, [language]);
  // console.log(people);
  return (
    <div id="people">
      <div className="container">
        <div className="people"style={{color:dark?"white":""}}>
          {people.map((el) => (
            
            <div className="people--tex">
              {/* {console.log(el.id)} */}
              <Link to={`/actorsdetalis/${el.id}`}>
              {
                el.profile_path === null?(
                  <img src={userimg} alt="" />
                ):(
                <img
                  src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${el.profile_path}`}
                  alt="img"
                />
                )
              }
              </Link>
              <h3>{el.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default People;
