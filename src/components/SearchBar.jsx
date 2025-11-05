import React from "react";
import "../styles/styles.css";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <form
        id="searchForm"
        onSubmit={e => e.preventDefault()}
      >
        <i className="fas fa-search"></i>
        <input
          type="text"
          id="searchInput"
          placeholder="KËRKO PËR RECETË"
          autoComplete="off"
          onChange={() => window.searchRecipe && window.searchRecipe()}
        />
      </form>
    </div>
  );
}