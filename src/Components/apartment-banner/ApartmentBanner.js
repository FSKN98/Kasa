import React from "react";
import "./ApartmentBanner.css";

export default function ApartmentBanner(props)
{
  const {imgSource}=props
  return (
   <div>
        <img
          src={imgSource}
          alt=""
          className="apartmentImg"
        />
      </div>
  )
}
