import React from "react";
import "./ApartmentDescription.css";

export function ApartmentDescription(props)
{
  const {title,descriptionApart } = props
  
  return (
    <div className="apartmentDescription">
      <p className="descriptionHeader">
        <span>{title}</span>
        <i className="fas fa-chevron-down"></i>
      </p>
      <p className="descriptionContent">
       {descriptionApart}
      </p>
    </div>
  );
}
