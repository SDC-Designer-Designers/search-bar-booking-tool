// jshint esversion:6
import React from 'react';

class BookingSubmitForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='al-booking-submit-form'>
        <div className='al-booking-button-container'>
          <button className='al-booking-button'>
            <div className='al-booking-button-text-container'>
              <span className='al-booking-button-text'>Book Now</span>
            </div>
          </button>
        </div>
      </div>
    );
  }
};

export default BookingSubmitForm;