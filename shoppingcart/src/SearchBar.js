import React from 'react';

const SearchBar = ({ searchTerm, onSearch }) => {
  const handleSearchTermChange = (event) => {
    onSearch(event.target.value);
  }

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearchTermChange} placeholder="Search for products..." />
    </div>
  );
};

export default SearchBar;
