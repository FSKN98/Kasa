import React from "react";
import "./FicheLogement.css"

export default function FicheLogement() {
  return (
    <div className="apartmentPage">
      <div>
        <img src="https://picsum.photos/800/400" alt="" className="apartmentImg" />
      </div>
      <div>
        <h1 className="apartmentTitle">Cozy loft on the Canal Saint-Martin</h1>
        <h2>Paris, Île-de-France</h2>
        <div className="apartmentTags">
        <span className="apartmentTag">Cozy</span>
        <span className="apartmentTag">Canal</span>
          <span className="apartmentTag">Paris 10</span>
          </div>
      </div>
      <div className="apartmentOwner">
        <h3>Alexandre Dumas</h3>
        <div className="apartmentOwnerBadge"></div>
        <div className="apartmentOwnerStars">
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
        </div>
      </div>
      <div className="apartmentDescription">
        <p>Description</p>
        <p>
          Ex ea ullamco ad est do ipsum minim laboris nostrud consequat labore
          proident. Commodo est sit ad ea nulla aliquip nisi sint sit et nisi
          officia sit. Aliquip tempor incididunt adipisicing laboris. Lorem sunt
          irure sint amet aliquip do cupidatat ea ex incididunt adipisicing.
        </p>
      </div>
      <div className="apartmentDescription">
        <p>Description</p>
        <p>
          Ex ea ullamco ad est do ipsum minim laboris nostrud consequat labore
          proident. Commodo est sit ad ea nulla aliquip nisi sint sit et nisi
          officia sit. Aliquip tempor incididunt adipisicing laboris. Lorem sunt
          irure sint amet aliquip do cupidatat ea ex incididunt adipisicing.
        </p>
      </div>
    </div>
  );
}
