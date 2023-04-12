import React from "react";
import { ApartmentDescription } from "../../Components/apartment-description/ApartmentDescription";
import "./About.css";

export default function about() {
  return (
    <div className="aboutContainer">
      <h1 className="bannerAbout"></h1>
      <div className="aboutContent">
        <ApartmentDescription
          title="Fiabilité  "
          descriptionApart="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        />
        <ApartmentDescription
          title="Respect "
          descriptionApart="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <ApartmentDescription
          title="Service "
          descriptionApart="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <ApartmentDescription
          title="Responsabilité "
          descriptionApart="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </div>
  );
}
