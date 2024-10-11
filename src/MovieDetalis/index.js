import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../Api";
import { useParams } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaHeart, FaBookmark, FaStar } from "react-icons/fa6";
import People from "../companents/People";
import Videos from "../companents/Videos/Videos";
import { useContext } from "react";
import { LanguageContext } from "../companents/Context";

const MovieDetalis = () => {
  const [modal, setModal] = useState(false);
  const {language,favarite,setFavarite}=useContext(LanguageContext)
  let { kinoId } = useParams();

  // console.log(modal);
  //   https://api.themoviedb.org/3/movie/$%7BmovieId%7D?api_key=api&language=en-US
  const [detalis, setDetalis] = useState({});
  const getDetalis = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/${kinoId}?api_key=${key}&language=${language}`
    ).then((res) => {
      setDetalis(res.data);
    });
  };

  useEffect(() => {
    getDetalis(API_KEY);
  }, [language]);


  const addToFavarite=(data)=>{
    let far = favarite.find((el)=>el.id === data.id)
    if(far){
      let filteredFar = favarite.filter((el)=>el.id !== data.id)
      setFavarite(filteredFar);
    }else{
      let res =[...favarite,data]
      setFavarite(res)
    }
    
  }

  let {
    title,
    poster_path,
    release_date,
    backdrop_path,
    overview,
    runtime,
    tagline,
    vote_average,
    genres,
    id
  } = detalis;
  let circle =null
  if(vote_average*10<=60){
    circle= "red"
  } else if(vote_average*10>=60){
    circle= "yellow"
  }else{
    circle="green"
  }
  return (
    <>
    <div
      id="detalis"
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 50),rgba(0,0, 0, 0) 50%, rgba(0, 0, 0, 50) 100%),url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/${backdrop_path})no-repeat center/cover`,
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <div className="detalis" >
          <img
            onClick={() => setModal(!modal)}
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`}
            alt="img"
          />
          <div className="detalis--text">
            <h1>
              {title} ({release_date?.slice(0, 4)})
            </h1>
            <div className="detalis--text__content">
              <h3>{release_date}•</h3>
              <div className="detalis--text__content--genres">
                {genres?.map((el) => (
                  <h3>{el.name},</h3>
                ))}
              </div>
              <h3>
                •{Math.floor(runtime / 60)}h{runtime % 60}min
              </h3>
            </div>
            <div className="detalis--text__icons">
              <div className="detalis--text__icons--vote" style={{
                border: `4px solid ${circle}`
              }}>
                <h2>{Math.round(vote_average*10)}%</h2>
              </div>
              <div className="detalis--text__icons--icon">
                <a href="#">
                  <TfiMenuAlt />
                </a>
              </div>
              <div
                // onClick={() => setColor(!color)}
                className="detalis--text__icons--icon"
              >
                <a onClick={()=>{
                  addToFavarite(detalis)
                 
                  // setHeart(!heart)
                }}
                  style={{
                    color: favarite.find((el) => el.id === id) ? 'red' : 'white'
                  }}
                  href="#"
                >
                  <FaHeart />
                </a>
              </div>
              <div className="detalis--text__icons--icon">
                <a href="#">
                  <FaBookmark />
                </a>
              </div>
              <div className="detalis--text__icons--icon">
                <a href="#">
                  <FaStar />
                </a>
              </div>
            </div>
            <h2>
              <i>{tagline}</i>
            </h2>
            <p>{overview}</p>
          </div>
        </div>
        <div className="modal"
          style={{
            display: modal ? "flex" : "none",
          }}>
          <img
        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`}
        alt="img"/>
        <h1>{ title}</h1>
        <h2 onClick={()=>setModal(false)}>x</h2>
        </div>
      </div>
      
    </div>
    <People movieId={kinoId}/>
    <Videos movieId={kinoId}/>
    </>
  );
};

export default MovieDetalis;
