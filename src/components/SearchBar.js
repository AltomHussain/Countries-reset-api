import React from 'react'
import "./DisplayCountries.css";
export default function SearchBar({ handleSearch, countryInfo, filteredCountry }) {
  return (
    <div className="search-container" >

      <div >
        <input
          type="text"
          placeholder="Search for a country"
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      <div>
        <p className="display-number">{`Show ${filteredCountry.length}/ ${countryInfo.length} countries`}</p>
     </div>

  </div>
  );
}
