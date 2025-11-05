import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/styles.css";

const showSearchBarRoutes = [
  "/",
  "/antipasta",
  "/makarona",
  "/oriz",
  "/supa",
  "/mish",
  "/peshk",
  "/embelsira",
];

export default function Header() {
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const showSearchBar = showSearchBarRoutes.includes(location.pathname);

  return (
    <header>
      <div className="top-bar">
        <a
          href="https://www.instagram.com/faqjajote"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.youtube.com/faqjajote"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube"></i>
        </a>
        <a
          href="https://www.facebook.com/faqjajote"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://twitter.com/faqjajote"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-x-twitter"></i>
        </a>
      </div>
      <div className="header-flex">
        <div className="logo-title">
          <Link
            to="/"
            className="logo-link"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              textDecoration: "none",
            }}
            onClick={handleHomeClick}
          >
            <img
              src={require("../assets/logo.jpg")}
              alt="Logo"
              className="logo"
            />
            <h1 style={{ color: "#fff", margin: 0 }}>COOKING PASSION</h1>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/" onClick={handleHomeClick}>
                Kreu
              </Link>
            </li>
            <li className="dropdown">
              <span>Receta Gatimi</span>
              <ul className="dropdown-content">
                <li>
                  <Link to="/antipasta">Antipasta</Link>
                </li>
                <li>
                  <Link to="/makarona">Receta për makarona</Link>
                </li>
                <li>
                  <Link to="/oriz">Receta për oriz</Link>
                </li>
                <li>
                  <Link to="/supa">Receta për supa</Link>
                </li>
                <li>
                  <Link to="/mish">Receta me mish</Link>
                </li>
                <li>
                  <Link to="/peshk">Peshk</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/embelsira">Ëmbëlsira</Link>
            </li>
            <li>
              <Link to="/keshilla">Këshilla Gatimi</Link>
            </li>
            <li>
              <Link to="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </nav>
        {showSearchBar && (
          <div className="search-bar">
            <form
              id="searchForm"
              onSubmit={(e) => {
                e.preventDefault();
                window.searchRecipe && window.searchRecipe();
              }}
            >
              <i className="fas fa-search"></i>
              <input
                type="text"
                id="searchInput"
                placeholder="KËRKO PËR RECETË"
              />
            </form>
          </div>
        )}
      </div>
    </header>
  );
}