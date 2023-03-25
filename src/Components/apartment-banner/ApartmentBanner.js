import React, { useState } from "react";
import "./ApartmentBanner.css";

export default function ApartmentBanner(props) {
  const pictures = props.pictures;
  const [currentPicture, setCurrentPicture] = useState(0);
  const getClassName = (i) => {
    if (i === currentPicture) return "show";
    return "";
  };
  const moveToNext = () =>
  {
    setCurrentPicture((currentPicture+1)%pictures.lenght)
  }
  return (
    <div>
      <div className="apartmentImgContainer">
        <button onClick={moveToNext}>ArrowLeft</button>
          <button>ArrowRight</button>
        {pictures.map((pic, i) => (
          <div key={i}  className="apartmentImg">
            <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
          </div>
        ))}
      </div>
    </div>
  );
}
