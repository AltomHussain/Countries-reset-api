import { logDOM } from "@testing-library/react";
import React from "react";

export default function SelectRegion({ countryInfo, handleSelect }) {
//   console.log(countryInfo.filter((p) => p.region.includes("Africa")));
  function handleChange (e){
    console.log(countryInfo.filter((p) =>p.name== p.region.includes(e.target.value)));

  }
  return (
    <div>
      <select onChange={(e)=> handleSelect(e)}>
        <option>Select all</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Africa</option>
        <option>Americas</option>
      </select>
    </div>
  );
}
