import React, { useState } from "react";
import "./ApartmentBanner.css";

export default function ApartmentBanner(props) {
  const pictures = props.pictures;
  const [currentPicture, setCurrentPicture] = useState(0); //crochet parce qu'on peut changer la valeur

  const moveToNext = () => {
    if (currentPicture === pictures.length - 1) {
      setCurrentPicture(0);
    } else {
      setCurrentPicture(currentPicture + 1);
    }
  };
  const moveToBack = () => {
    if (currentPicture === 0) {
      setCurrentPicture(pictures.length - 1);
    } else {
      setCurrentPicture(currentPicture - 1);
    }
  };
  return (
    <div className="apartmentImgContainer">
      <div className="imgContainer">
        {pictures.map((pic, i) => (
          <img
            key={pic}
            src={pictures[currentPicture]}
            alt=""
            className="apartmentImg"
          />
        ))}
        <div className="numberSlide">
          {currentPicture + 1}/{pictures.length}
        </div>
      </div>

      <button className="btn buttonBack" onClick={moveToBack}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="btn buttonNext" onClick={moveToNext}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}
