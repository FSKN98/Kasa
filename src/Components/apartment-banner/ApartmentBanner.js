import React, { useState } from "react";
import "./ApartmentBanner.css";

export default function ApartmentBanner(props) {
  const pictures = props.pictures;
  const [currentPicture, setCurrentPicture] = useState(0);

  const moveToNext = () => {
    setCurrentPicture(currentPicture + 1);
  };
  const moveToBack = () => {
    setCurrentPicture(currentPicture - 1);
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
          ></img>
        ))}
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
