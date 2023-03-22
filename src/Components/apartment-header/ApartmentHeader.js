import React from 'react'
import "./ApartmentHeader.css"

export default function ApartmentHeader() {
  return (
   <div className="apartmentHeader">
        <div>
          <h1 className="apartmentTitle">
            Cozy loft on the Canal Saint-Martin
          </h1>
          <h2>Paris, Île-de-France</h2>
          <div className="apartmentTags">
            <span className="apartmentTag">Cozy</span>
            <span className="apartmentTag">Canal</span>
            <span className="apartmentTag">Paris 10</span>
          </div>
        </div>
        <div className="apartmentOwner">
          <div className="apartmentOwnerDetails">
            <h3 className="ownerTitle">
              <span>Alexandre</span>
              <span>Dumas</span>{" "}
            </h3>
            <div className="apartmentOwnerBadge"></div>
          </div>
          <div className="apartmentOwnerStars">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>☆</span>
            <span>☆</span>
          </div>
        </div>
      </div>
  )
}
