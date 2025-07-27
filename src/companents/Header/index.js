import React, { useContext, useState } from "react";
import HeaderLogo from "../../img/headerLogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { LanguageContext } from "../Context";
import { GoSun } from "react-icons/go";

const Header = () => {
  const [movieName, setMovieName] = useState("");
  const nav = useNavigate();
  const {favarite,setLanguage,dark,setDark}=useContext(LanguageContext)
  console.log(dark);
  // console.log(movieName);
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img src={HeaderLogo} alt="" />
          <div className="header--nav">
            <Link to="/"> Home</Link>
            <Link to="/popular"> Popular</Link>
            <Link to="/toprated"> TopRated</Link>
          </div>
          
          <select onChange={(e)=>setLanguage(e.target.value)}>
            <option value="en-US">English</option>
            <option value="ru-RU">Русский</option>
            <option value="fr-FR">France</option>
          </select>
          <GoSun  className="so" onClick={()=>setDark(!dark)}/>
          <Link style={{color:"white",fontSize:"20px"}} to ="/favarite">Favorite <h3>{favarite.length}</h3></Link>
          <div className="header--searcg">
            <input
              onInput={(e)=>nav(`/search/${e.target.value}`)}
              onChange={(e) => setMovieName(e.target.value)}
              value={movieName}
              type="Search"
              placeholder="Search"
            />
            {
              movieName.length?<button
              onClick={() => {
                nav(`/search/${movieName}`);
                setMovieName("");
              }}
            >
              Search..
            </button>:null
            }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
