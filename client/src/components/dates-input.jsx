// jshint esversion:6
import React from 'react';
import { connect } from 'react-redux';
import { selectCheckInDate, selectCheckOutDate } from '../redux/booking/booking.selectors.js';
import { toggleCalendar } from '../redux/booking/booking.action.js';

class DatesInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: false,
      check_in: '',
      check_out: ''
    };
    this.handleClick1 = this.handleClick1.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
  }

  handleClick1(e) {
    this.setState({selected1: true}, () => this.props.toggleCalendar());
  }

  clearInputs(e) {
    this.setState({selected1: false});
  }

  componentDidMount() {

  }

  render() {

    return (
      <div className='al-dates-input'>
        <div className='al-dates-input-check-in-container' onClick={this.handleClick1}>
          <div className='al-dates-input-label-container'>
            <span className={`${this.props.selectCheckInDate ? 'al-guests-input-label-text-top' : 'al-guests-input-label-text'}`}>Check In</span>
          </div>
          <div className='al-dates-input-check-in-date-container'>
            <span className='al-dates-input-check-in-date'>{this.props.selectCheckInDate}</span>
          </div>
        </div>
        <div className='al-dates-input-check-out-container' onClick={this.props.openCalendar}>
          <div className='al-dates-input-label-container'>
            <span className={`${this.props.selectCheckOutDate ? 'al-guests-input-label-text-top' : 'al-guests-input-label-text'}`}>Check Out</span>
          </div>
          <div className='al-dates-input-check-in-date-container'>
            <span className='al-dates-input-check-in-date'>{this.props.selectCheckOutDate}</span>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return ({
      selectCheckInDate: selectCheckInDate(state),
      selectCheckOutDate: selectCheckOutDate(state)
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
      toggleCalendar: () => dispatch(toggleCalendar())
   });
}

export default connect(mapStateToProps, mapDispatchToProps)(DatesInput);
