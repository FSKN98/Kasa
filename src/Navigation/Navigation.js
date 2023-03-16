import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import React from "react";
import Banner from "../Pages/Banner/BannerHome";
import ApartmentGrid from "../Pages/apartment-grid/ApartmentGrid";
import HomePage from "../Pages/home-page/HomePage";
import ErrorPage from "../Pages/error-page/ErrorPage";
import ListPage from "../Pages/list/List";
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
            <Route exact path="/" element={<Banner />} />
            <Route exact path="/" element={<ApartmentGrid />} />
            <Route exact path="/a-propos" element={<About />} />
            <Route exact path="/home-page" element={<HomePage />} />
            <Route exact path="/list" element={<ListPage />} />
            <Route exact path="/*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
}
