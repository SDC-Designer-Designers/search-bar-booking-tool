// jshint esversion:6
import React from 'react';
import StarRatings from 'react-star-ratings';
import { connect } from 'react-redux';
import {selectRating, selectReviewNumber} from '../redux/booking/booking.selectors.js';

class BookingReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='al-booking-reviews'>
        <div className='al-star-rating-container'>
          <StarRatings rating={this.props.selectRating} starRatedColor='black' numberOfStars={5} name='rating' starDimension='15px' starSpacing='1.5px'/>
        </div>
        <div className='al-reviews-number-container'>
          <span className='al-reviews-number-text'>{`${this.props.selectReviewNumber} ${this.props.selectReviewNumber === 1 ? 'review' : 'reviews'}`}</span>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return ({
      selectRating: selectRating(state),
      selectReviewNumber: selectReviewNumber(state)
  });
};

export default connect(mapStateToProps, null)(BookingReviews);
