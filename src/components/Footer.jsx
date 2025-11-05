import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

export default function Footer() {
  return (
    <footer className="modern-footer">
      <div className="footer-content">
        <div className="footer-col logo-col">
          <img src={require("../assets/logo.jpg")} alt="Logo" className="footer-logo" />
          <div className="footer-slogan">
            COOKING PASSION<br />
            <span>"PASION PËR GATIMIN, FRYMËZIM PËR ÇDO SHIJE."</span>
          </div>
        </div>
        <div className="footer-col">
          <h4>Receta</h4>
          <ul>
            <li><Link to="/antipasta">Antipasta</Link></li>
            <li><Link to="/makarona">Makarona</Link></li>
            <li><Link to="/oriz">Oriz</Link></li>
            <li><Link to="/supa">Supa</Link></li>
            <li><Link to="/mish">Mish</Link></li>
            <li><Link to="/peshk">Peshk</Link></li>
            <li><Link to="/embelsira">Ëmbëlsira</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Info</h4>
          <ul>
            <li><Link to="/keshilla">Këshilla Gatimi</Link></li>
            <li><Link to="/kontakt">Kontakt</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Rrjetet Sociale</h4>
          <div className="footer-social">
            <a href="https://www.instagram.com/faqjajote" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com/faqjajote" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
            <a href="https://www.facebook.com/faqjajote" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/faqjajote" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
          </div>
        </div>
      </div>
      <hr className="footer-line" />
      <div className="footer-bottom">
        <p>&copy; 2025 Cooking Passion. Të gjitha të drejtat e rezervuara.</p>
      </div>
    </footer>
  );
}