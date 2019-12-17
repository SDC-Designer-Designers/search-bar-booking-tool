// jshint esversion:6
import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='al-search-bar-container'>
        <input className='al-input-bar' size="66.5" value={this.props.term} onChange={this.props.handleChange}/>
        <label className={`${this.props.term.length ? 'al-shrink' : ''} al-form-input-label al-search-bar`}>{this.props.term.length ? 'Where' : 'Where to?'}</label>
      </div>
    );
  }
};

export default SearchBar;