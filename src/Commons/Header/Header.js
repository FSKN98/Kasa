import React from "react";
import { Link } from "react-router-dom";
import kasaLogo from "../../Images/Logos/Logo-Kasa.svg"
import "./Header.css"

export default function Header() {
  return (
    <header className="header">
          <div>
              <img src={kasaLogo} className="logoKasa" />
</div>
      <nav className="navbar">
        <Link to="/" className="accueil">Accueil</Link>

        <Link to="/a-propos" className="aPropos">A propos</Link>
      </nav>
    </header>
  );
}
