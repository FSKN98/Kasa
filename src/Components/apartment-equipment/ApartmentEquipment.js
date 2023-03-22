import React from "react";
import "./ApartmentEquipment.css";

export function ApartmentEquipment(props) {
  const { EquipmentApart } = props;

  return (
    <div className="apartmentEquipment">
      <p className="equipmentHeader">
        <span>Équipements</span>
        <i className="fas fa-chevron-down"></i>
      </p>
      <div>
        {" "}
        <p className="equipmentContent">{EquipmentApart}</p>
      </div>
    </div>
  );
}
