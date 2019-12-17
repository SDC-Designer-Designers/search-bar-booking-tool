// jshint esversion:6
import React from 'react';
import SearchResult from './search-result.jsx';

const SearchDropdown = (props) => {
  return (
    <div className='al-search-dropdown'>
    {
      props.searchlistings.length ?
      (
        props.searchlistings.map((searchlisting, i) => {
          return (
            <SearchResult selectSearchResult={props.selectSearchResult} searchlisting={searchlisting} key={i}/>
          );
        })
      )
      :
      (
        null
      )
    }
    </div>
  );
};

export default SearchDropdown;