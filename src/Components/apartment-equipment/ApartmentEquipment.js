import React, { useState } from "react";
import "./ApartmentEquipment.css";

export function ApartmentEquipment(props) {
  const { equipmentsApart } = props;

  const [toggleEquipmentDescription, setToggleEquipmentDescription] =useState(false) //Pour ne pas l'affciher par defaut 
  const onToggle = () =>
  {
    setToggleEquipmentDescription(!toggleEquipmentDescription) // ! pour faire l'opposé 
  }
  return (
    <div className="apartmentEquipment">
      <p className="equipmentHeader" onClick={onToggle}>
        <span>Équipements</span>
        <i className={toggleEquipmentDescription?"fas fa-chevron-down":"fas fa-chevron-up"}></i> 
      </p>
      { toggleEquipmentDescription && <div className="equipmentContainer"> 
        {equipmentsApart.map((equipment) => (
          <p key={equipment} className="equipmentContent">{equipment}</p>
        ))}
      </div>}
    </div>
  );
}
