import React, { useEffect, useState } from "react";
import "./ApartmentHeader.css";

export default function ApartmentHeader(props) {
  const { apartment } = props;
  const [name, setName] = useState("")
  const [firstName, setFirstName] = useState("")
  useEffect(() =>
  {
    let names = apartment?.host?.name.split(" ")
    setFirstName(names[0])
    setName(names[1])
  },[])
  const renderRating = (position) => { 
    if (position < parseInt(apartment.rating)) { //PaerseInt pour convertir un texte en chiffre
      return <span>★</span>;
    } else {
      return <span>☆</span>;
    }
  };
  return (
    <div className="apartmentHeader">
      <div>
        <h1 className="apartmentTitle">{apartment.title}</h1>
        <h2>{apartment.location}</h2>
        <div className="apartmentTags">
          {apartment.tags.map((tag) => (
            <span key={tag} className="apartmentTag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="apartmentOwner">
        <div className="apartmentOwnerDetails">
          <h3 className="ownerTitle">
            <span>{firstName}</span>
            <span>{name}</span>
          </h3>
          
           <img
          src={apartment.host.picture}
          alt=""
          className="apartmentOwnerBadge"
        />
        </div>
        <div className="apartmentOwnerStars">
          {apartment?.rating && renderRating(0)} 
          {apartment?.rating && renderRating(1)}
          {apartment?.rating && renderRating(2)}
          {apartment?.rating && renderRating(3)}
          {apartment?.rating && renderRating(4)}
        </div>
      </div>
    </div>
  );
}
