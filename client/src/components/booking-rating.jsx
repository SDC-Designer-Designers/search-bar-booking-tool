// jshint esversion:6
import React from 'react';
import { connect } from 'react-redux';
import {selectRating, selectReviewOverview} from '../redux/booking/booking.selectors.js';

class BookingRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='al-booking-rating'>
        <div className='al-booking-random-review-container'>
          <span className='al-booking-random-review-text'>{this.props.selectReviewOverview}</span>
        </div>
        <div className='al-booking-average-rating-container'>
          <span className='al-booking-average-rating-text'>{`${this.props.selectRating}/5`}</span>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return ({
      selectRating: selectRating(state),
      selectReviewOverview: selectReviewOverview(state)
  });
};

export default connect(mapStateToProps, null)(BookingRating);