import React from 'react'
import "./DisplayCountries.css";
export default function SearchBar({ handleSearch, countryInfo, filteredCountry }) {
  return (
    <div className="main-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a country"
          onChange={handleSearch}
          className="search-input"
        />
        <p className="display-number">{`Show ${filteredCountry.length}/ ${countryInfo.length} countries`}</p>
      </div>
    </div>
  );
}
