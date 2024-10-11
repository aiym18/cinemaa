import React, { useEffect, useState } from "react";
import { LanguageContext } from ".";

const RoodContext = ({ children }) => {
  const [language, setLanguage] = useState("");
  const [dark, setDark] = useState(false);
  const [heart, setHeart] = useState(false);
  const [favarite, setFavarite] = useState([]);

  
  const local =()=>{
    let res = JSON.parse(localStorage.getItem("heart")) || []
    setFavarite(res)
  }
  localStorage.setItem("heart", JSON.stringify(favarite))
  useEffect(()=>{
    local()
  },[])
 
  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        dark,
        setDark,
        favarite,
        setFavarite,
        heart,
        setHeart,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default RoodContext;
