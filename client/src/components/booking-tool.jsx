// jshint esversion:6
import React from 'react';
import BookingHeader from './booking-header.jsx';
import BookingReviews from './booking-reviews.jsx';
import BookingRating from './booking-rating.jsx';
import ValidDatesDisplay from './valid-dates-display.jsx';
import DatesInput from './dates-input.jsx';
import GuestsInput from './guests-input.jsx';
import BookingSubmitForm from './booking-submit-form.jsx';
import OwnerInfo from './owner-info.jsx';
import CalendarDisplayBooking from './calendar-display-booking.jsx';
import BookingTotal from './booking-total.jsx';
import { connect } from 'react-redux';
import {selectValid, selectCalendar} from '../redux/booking/booking.selectors.js';
import {toggleCalendar} from '../redux/booking/booking.action.js';

class BookingTool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check_in: '',
      check_out: '',
      guests: false,
      calendar: false,
      total: true,
      header_loading: false,
      total_loading: false,
      valid_dates: false
    };
    this.handleCheckInSelect = this.handleCheckInSelect.bind(this);
    this.handleCheckOutSelect = this.handleCheckOutSelect.bind(this);
    this.handleGuestsForm = this.handleGuestsForm.bind(this);
    this.handleCloseGuestsForm = this.handleCloseGuestsForm.bind(this);
    this.openCalendar = this.openCalendar.bind(this);
    this.closeCalendar = this.closeCalendar.bind(this);
    this.handleTotal = this.handleTotal.bind(this);
  }

  handleTotal(e) {
    this.setState({total: !this.state.total});
  }

  handleCheckInSelect(e) {
    this.setState({check_in: e.target.value});
  }

  handleCheckOutSelect(e) {
    this.setState({check_out: e.target.value});
  }

  openCalendar(e) {
    this.setState({calendar: true});
  }

  closeCalendar(e) {
    this.setState({calendar: false});
  }

  componentDidMount() {

  }

  handleGuestsForm(e) {
    this.setState({guests: true});
  }

  handleCloseGuestsForm(e) {
    this.setState({guests: false});
  }

  render() {
    let style = this.state.total ? 'al-booking-tool-total' : 'al-booking-tool';
    return (
      <div className={style}>
        <div className='al-booking-header-container'>
          <BookingHeader header_loading={this.state.header_loading}/>
        </div>
        <div className='al-booking-reviews-container'>
          <BookingReviews />
        </div>
        <div className='al-booking-rating-container'>
          <BookingRating/>
        </div>
        <div className='al-valid-dates-display-container'>
          <ValidDatesDisplay valid_dates={this.state.valid_dates}/>
        </div>
        <div className='al-dates-input-container'>
          <DatesInput openCalendar={this.openCalendar} handleCheckInSelect={this.handleCheckInSelect} handleCheckOutSelect={this.handleCheckOutSelect} check_in={this.state.check_in} check_out={this.state.check_out}/>
        </div>
        <div className='al-guests-input-container'>
          <GuestsInput guests={this.state.guests} handleGuestsForm={this.handleGuestsForm} handleCloseGuestsForm={this.handleCloseGuestsForm}/>
        </div>
        <div className='al-booking-total-container'>
        {
          this.props.selectValid ?
          (
            <BookingTotal total_loading={this.state.total_loading}/>
          )
          :
          (
            null
          )
        }
        </div>
        <div className='al-booking-submit-form-container'>
          <BookingSubmitForm />
        </div>
        <div className='al-owner-info-container'>
          <OwnerInfo />
        </div>
        <div className='al-booking-calendar-container'>
        {
          this.props.selectCalendar ?
          (
            <CalendarDisplayBooking closeCalendar={this.closeCalendar}/>
          )
          :
          (
            null
          )
        }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
      selectValid: selectValid(state),
      selectCalendar: selectCalendar(state)
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
      toggleCalendar: () => dispatch(toggleCalendar())
   });
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingTool);