import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../Api";
import { useParams } from "react-router-dom";
import PersonDetalis from "../companents/PersonDetalis/PersonDetalis";
import { LanguageContext } from "../companents/Context";

const ActorDetalis = () => {
  const { actorId } = useParams();
  const [biogMore, setBiogMore] = useState(300);
  const [actor, setActor] = useState({});
  const {language}=useContext(LanguageContext)
  const {dark}=useContext(LanguageContext)
  const getActorDetalis = (key) => {
    axios(
      `https://api.themoviedb.org/3/person/${actorId}?api_key=${key}&language=${language}`
    ).then((res) => {
      setActor(res.data);
    });
  };
  useEffect(() => {
    getActorDetalis(API_KEY);
  }, [biogMore,language]);
  // console.log(res.data, 'ggg');
  let { name, birthday, profile_path, biography, place_of_birth, gender } =
    actor;
  return (
    <div id="actors">
      <div className="container" style={{color:dark?"white":""}}>
        <div className="actors" >
          <img 
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${profile_path}`}
            alt="img" 
          />
          <div className="actors--tex">
            <h1>{name}</h1>
            <h2>Биография</h2>
            <p>
              {biography?.slice(0, biogMore)}
              {""}
              <span
                onClick={
                  biogMore > 300
                    ? () => setBiogMore(300)
                    : () => setBiogMore(biography?.length)
                }
              >
                {" "}
                {biogMore > 300 ? "close..." : "more.."}
              </span>
            </p>

            <PersonDetalis id={actorId} />
          </div>
        </div>
        <h3>{birthday}</h3>
        <h4>{gender}</h4>
        <h4>{place_of_birth}</h4>
      </div>
    </div>
  );
};

export default ActorDetalis;
