// jshint esversion:6
import React from 'react';

const LoginDropdown = () => {
  const options = ['Traveler Login', 'Owner Login'];
  return (
    <div className='al-login-dropdown'>
    {
      options.length ?
      (
        options.map((option, i) => {
          return (<div key={i} className='al-login-option-container'><span className='al-login-option-text'>{option}</span></div>);
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

export default LoginDropdown;