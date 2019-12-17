// jshint esversion:6
import React from 'react';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {

  }

  handleClick(e) {
    this.props.selectSearchResult(Number(this.props.searchlisting.id));
  }

  render() {
    return (
      <div className='al-search-result' onClick={this.handleClick}>
        <div className='al-search-result-pic-container'>
          <img className='al-search-result-pic' src={this.props.searchlisting.pic}/>
        </div>
        <div className='al-search-result-text-container'>
          <div className='al-search-result-title-container'>
            <span className='al-search-result-text al-gray'>{`${this.props.searchlisting.title.slice(0, 61)}`}</span>
          </div>
          <div className='al-search-result-location-container'>
            <div className='al-search-result-city-container'>
              <span className='al-search-result-text'>{`${this.props.searchlisting.city}`}</span>
            </div>
            <div className='al-search-result-state-container'>
              <span className='al-search-result-text'>{`, ${this.props.searchlisting.state}`}</span>
            </div>
            <div className='al-search-result-country-container'>
              <span className='al-search-result-text'>, USA </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SearchResult;