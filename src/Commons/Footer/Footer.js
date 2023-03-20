import React from "react";
import "./Footer.css";
import logoFooter from "../../Images/Logos/Logo-Footer.png";

export default function Footer() {
  return (
    <div  className="footerContainer">
      <div className="footerContain">
        <img src={logoFooter} className="logoFooter" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}
