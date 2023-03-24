import React from "react";
import "./ApartmentEquipment.css";

export function ApartmentEquipment(props) {
  const { equipmentsApart } = props;

  return (
    <div className="apartmentEquipment">
      <p className="equipmentHeader">
        <span>Équipements</span>
        <i className="fas fa-chevron-down"></i>
      </p>
      <div>
        {equipmentsApart.map((equipment) => (
          <p key={equipment} className="equipmentContent">{equipment}</p>
        ))}
      </div>
    </div>
  );
}
