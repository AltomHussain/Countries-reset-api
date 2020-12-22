import React from 'react'

export default function SearchBar({handleSearch}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for a country"
        onChange={handleSearch}
      />
    </div>
  );
}
