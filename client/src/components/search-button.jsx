// jshint esversion:6
import React from 'react';

const SearchButton = (props) => {
  return (
    <button onClick={props.handleSubmit} className='al-search-button'><span className='al-search-button-text'>Search</span></button>
  );
};

export default SearchButton;