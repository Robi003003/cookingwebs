import React from "react";
import "../styles/styles.css";

export default function RecipeCard({ image, title, description, reverse, children }) {
  return (
    <div className={`receta-card${reverse ? " reverse" : ""}`}>
      <div className="receta-img">
        <img src={image} alt={title} />
      </div>
      <div className="receta-content">
        <h3>{title}</h3>
        <p className="receta-highlight">{description}</p>
        {children}
      </div>
    </div>
  );
}