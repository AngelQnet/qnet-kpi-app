import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchItems } from '../data/searchData';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate();

  const handleClear = () => {
    setSearchTerm('');
    setFilteredResults([]);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim()) {
      const results = searchItems.filter((item) =>
        item.label.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  };

  const handleResultClick = (path) => {
    navigate(path);
    handleClear();
  };

  return (
    <div className="position-relative w-100" style={{ maxWidth: '400px' }}>
      <input
        className="form-control form-control-sm pe-4 ps-4"
        type="text"
        placeholder="Search"
        aria-label="Search"
        value={searchTerm}
        onChange={handleChange}
      />

      {searchTerm && (
        <span
          className="position-absolute end-0 pe-2 text-muted"
          style={{
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer'
          }}
          onClick={handleClear}
        >
          ✕
        </span>
      )}

      {filteredResults.length > 0 && (
        <ul
          className="list-group position-absolute w-100 mt-1"
          style={{ zIndex: 999, maxHeight: '200px', overflowY: 'auto' }}
        >
          {filteredResults.map((item, index) => (
            <li
              key={index}
              className="list-group-item list-group-item-action"
              style={{ cursor: 'pointer' }}
              onClick={() => handleResultClick(item.path)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
