import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApartmentById } from "../../Actions/actions";
import ApartmentBanner from "../../Components/apartment-banner/ApartmentBanner";
import { ApartmentEquipment } from "../../Components/apartment-equipment/ApartmentEquipment";
import ApartmentHeader from "../../Components/apartment-header/ApartmentHeader";
import { ApartmentDescription } from "../../Components/apartmentDescription/ApartmentDescription";
import "./FicheLogement.css";

export default function FicheLogement() {
  const { id } = useParams();
  const [activeApart, setActiveApart] = useState(null);
  useEffect(() => {
    getApartmentById(id, setActiveApart);
  }, []);
  console.log(activeApart);
  return (
    activeApart && <div className="apartmentPage">
      <ApartmentBanner imgSource={activeApart.cover} />
      <ApartmentHeader />
      <div className="apartmentDescriptionArea">
        <ApartmentDescription descriptionApart={activeApart.description} />
        <ApartmentEquipment EquipmentApart={activeApart.equipments}/>
      </div>
    </div>
  );
}
