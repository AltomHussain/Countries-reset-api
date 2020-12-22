import React from 'react'

export default function SearchBar({ handleSearch, countryInfo, filteredCountry }) {
  return (
    <div>
      <p>{`Show ${filteredCountry.length}/ ${countryInfo.length} countries`}</p>
      <input
        type="text"
        placeholder="Search for a country"
        onChange={handleSearch}
      />
    </div>
  );
}
