import React from "react";
import { ApartmentDescription } from "../../Components/apartmentDescription/ApartmentDescription";
import "./About.css";

export default function about() {
  return (
    <div className="aboutContainer">

        <h1 className="bannerAbout"></h1>
<div className="aboutContent">
      <ApartmentDescription />
      <ApartmentDescription />
      <ApartmentDescription />
      <ApartmentDescription />
      </div>
      </div>
  );
}
