import React, { useState } from "react";
import "./DisplayCountries.css";
import "../App.css";
import SearchBar from "./SearchBar";
export default function DisplayCountries({ countryInfo }) {
  const [searchInput, setSearchInput] = useState([]);

  function handleSearch(e) {
   
    setSearchInput(e.target.value);
  }
  let filteredCountry = countryInfo.filter(
    (country) =>
      country.name.indexOf(searchInput) !== -1 &&
      country.capital.indexOf(searchInput) !== -1
  );
  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <div className="containter">
        {filteredCountry.map((country, index) => {
          return (
            <div key={index} className="card ">
              <img src={country.flag} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{country.name}</h5>
                <p className="card-text">{`Population: ${country.population}`}</p>
                <p className="card-text">{`Region: ${country.region}`}</p>
                <p className="card-text">{`Capital: ${country.capital}`}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
// population
// region
// capital
