import React from "react";
import "./DisplayCountries.css";
import "../App.css";
export default function DisplayCountries({ countryInfo }) {
  
  return (
    <div className="containter">
      {countryInfo.map((country, index) => {
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
  );
}
// population
// region
// capital
