import React, { useState } from "react";
import "./DisplayCountries.css";
import "../App.css";
import SearchBar from "./SearchBar";
import SelectRegion from "./SelectRegion";

import {  Link } from "react-router-dom";
export default function DisplayCountries({ countryInfo }) {
  const [searchInput, setSearchInput] = useState([]);
  const [selectRegion, setSelectRegion] = useState([]);

  //In this function you can remove a country
  function clickCountry(numericCode){
   
    let filterCountry= countryInfo.filter((code)=> code.numericCode !== numericCode);
  
    }



  function handleSearch(e) {
    setSearchInput(e.target.value.toLowerCase());
  }

  let filteredCountry = countryInfo.filter(
    (country) => country.name.toLowerCase().indexOf(searchInput) !== -1
  );
  let filteredRegion = filteredCountry.filter((p) =>
    p.region.includes(selectRegion)
  );

  function mappingResult(filteredCountry) {
    return filteredCountry.map((country, index) => {
      return (
        <div key={index} className="card">
          <img src={country.flag} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{country.name}</h5>
            <p className="card-text">{`Population: ${country.population}`}</p>
            <p className="card-text">{`Region: ${country.region}`}</p>
            <p className="card-text">{`Capital: ${country.capital}`}</p>
            <Link to={`/countries/${country.name}`} className="country-btn">country</Link>
            <button className="country-btn" onClick={()=> clickCountry(country.numericCode)}>Remove Country</button>
          </div>
        </div>
      );
    });
  }

  return (
    <div>
      <SelectRegion
        setSelectRegion={setSelectRegion}
        mappingResult={mappingResult}
        filteredCountry={filteredCountry}
      />
      <SearchBar
        handleSearch={handleSearch}
        filteredCountry={filteredCountry}
        countryInfo={countryInfo}
      />
      <div className="containter">
        {selectRegion
          ? mappingResult(filteredRegion)
          : mappingResult(filteredCountry)}
      </div>
    </div>
  );
}
