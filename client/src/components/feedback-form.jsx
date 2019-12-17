// jshint esversion:6
import React from 'react';

const FeedbackForm = () => {
  const options = ['I would like to leave a review for a property', 'I have an issue or question and would like some help', 'I want to leave a comment for this web site'];
  return (
    <div className='al-feedback-form'>
      <div className='al-feedback-form-top-row'>
        <div className='al-feedback-form-title-container'>
          <h3 className='al-feedback-form-title-text'>Site Feedback</h3>
          <button className='al-feedback-form-button'><span className='al-feedback-form-button-text'>X</span></button>
        </div>
      </div>
      <div className='al-feedback-form-options-container'>
      {
        options.length ?
        (
          options.map((option, i) => {
            return (
              <div key={i} className='al-feedback-form-option-container'>
                <span className='al-feedback-form-option-text'>{option}</span>
              </div>
            );
          })
        )
        :
        (
          null
        )
      }
      </div>
    </div>
  );
};

export default FeedbackForm;