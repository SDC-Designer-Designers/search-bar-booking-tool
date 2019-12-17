// jshint esversion:6
import React from 'react';
import LogoTitle from './logo-title.jsx';
import HeaderOptions from './header-options.jsx';
import SearchForm from './search-form.jsx';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='al-header-container'>
        <div className='al-header-upper-container'>
          <LogoTitle />
          <HeaderOptions />
        </div>
        <div className='al-header-lower-container'>
          <SearchForm />
        </div>
      </div>
    );
  }
}

export default Header;