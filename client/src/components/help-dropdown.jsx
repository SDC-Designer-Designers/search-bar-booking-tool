// jshint esversion:6
import React from 'react';

const HelpDropdown = () => {
  const options = ['Traveler Help', 'Owner Help', 'Property Manager Help', 'Trust & Safety'];
  return (
    <div className='al-help-dropdown'>
    {
      options.length ?
      (
        options.map((option, i) => {
          return (<div key={i} className='al-help-option-container'><span className='al-help-option-text'>{option}</span></div>);
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

export default HelpDropdown;