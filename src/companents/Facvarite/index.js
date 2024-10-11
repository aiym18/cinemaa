import React, { useContext } from "react";
import { LanguageContext } from "../Context";
import MovieCart from "../MovieCart";

const Favarite = () => {
  const { favarite } = useContext(LanguageContext);

  console.log(favarite, "hhh");
  return (
    <div id="popular">
      <div className="container">
        <div className="popular">
          {favarite.length === 0 ? (
            <h1>Избранных нет</h1>
          ) : (
            favarite.map((el) => <MovieCart movie={el} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Favarite;
