import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApartmentById } from "../../Actions/actions";
import ApartmentBanner from "../../Components/apartment-banner/ApartmentBanner";
import { ApartmentEquipment } from "../../Components/apartment-equipment/ApartmentEquipment";
import ApartmentHeader from "../../Components/apartment-header/ApartmentHeader";
import { ApartmentDescription } from "../../Components/apartmentDescription/ApartmentDescription";
import ErrorPage from "../error-page/ErrorPage";
import "./FicheLogement.css";

export default function FicheLogement() {
  const { id } = useParams();
  const [activeApart, setActiveApart] = useState(null);
  useEffect(() => {
    getApartmentById(id, setActiveApart);
  }, []);
  return (
    activeApart ? <div className="apartmentPage">
      <ApartmentBanner pictures={activeApart.pictures} />
      <ApartmentHeader apartment={activeApart} />
      <div className="apartmentDescriptionArea">
        <ApartmentDescription title="Description" descriptionApart={activeApart.description} />
        <ApartmentEquipment equipmentsApart={activeApart.equipments}/>
      </div>
    </div>:<ErrorPage/>
  );
}
