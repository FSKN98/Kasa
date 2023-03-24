import React from "react";

import "./ApartmentDescription.css";

export function ApartmentDescription(props) {
  const { title, descriptionApart } = props;

  const [isContentVisible, setIsContentVisible] = React.useState(false);
  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };
  return (
    <div className="apartmentDescription">
      <p className="descriptionHeader">
        <span>{title}</span>
        <i className="fas fa-chevron-up" onClick={showContent}></i>
      </p>
      {isContentVisible && (
        <p className="descriptionContent">{descriptionApart}</p>
      )}
    </div>
  );
}
