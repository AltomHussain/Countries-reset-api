import { logDOM , useState} from "@testing-library/react";
import React from "react";

export default function SelectRegion({ mappingResult,filteredCountry, setSelectRegion }) {

    function handleSelect(e) {
    const selectedValues= e.target.value
        setSelectRegion(selectedValues);
      }



  return (
    <div>
      <select onChange={(e)=> handleSelect(e)}>
        <option value="Select all">Select all</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Americas"> Americas</option>
      </select>
    </div>
  );
  

}