import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import React from "react";
import FicheLogement from "../Pages/FicheLogement/FicheLogement";
import HomePage from "../Pages/home-page/HomePage";
import ErrorPage from "../Pages/error-page/ErrorPage";
import Header from "../Commons/Header/Header";
import Footer from "../Commons/Footer/Footer";
import About from "../Pages/about/About";

export default function Navigation() {
  return (
    <Router>
      <div className="navigation_main_container">
        <main className="navigation_container">
          <Header />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
                   <Route exact path="/fiche-logement/:id" element={<FicheLogement />} />
            <Route exact path="/a-propos" element={<About />} />
            <Route exact path="/*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
}
