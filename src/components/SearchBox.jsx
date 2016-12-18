import React from 'react';
import './SearchBox.css';
const SearchBox = ({ keyword, handleKeywordChange }) => (
  <nav className="SearchBox">
    <div className="nav-wrapper">
      <div className="input-field">
        <input id="search"
               type="search"
               value={keyword}
               onChange={handleKeywordChange} />
        <label htmlFor="search"><i className="material-icons">search</i></label>
        <i className="material-icons">close</i>
      </div>
    </div>
  </nav>
);
export default SearchBox;
