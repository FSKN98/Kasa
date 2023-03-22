import React from "react";
import ApartmentBanner from "../../Components/apartment-banner/ApartmentBanner";
import ApartmentHeader from "../../Components/apartment-header/ApartmentHeader";
import { ApartmentDescription } from "../../Components/apartmentDescription/ApartmentDescription";
import "./FicheLogement.css";

export default function FicheLogement() {
  return (
    <div className="apartmentPage">
    <ApartmentBanner/>
      <ApartmentHeader/>
      <div className="apartmentDescriptionArea">
        <ApartmentDescription />
        <ApartmentDescription />
      </div>
    </div>
  );
}
