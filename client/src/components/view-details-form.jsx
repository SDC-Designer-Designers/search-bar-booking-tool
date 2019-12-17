// jshint esversion:6
import React from 'react';
import { connect } from 'react-redux';
import { selectCheckInDate, selectCheckOutDate, selectRate, selectCleaningFee, selectFee, selectGuests, selectTotal, selectDays} from '../redux/booking/booking.selectors.js';
import {toggleCalendar, toggleGuestsForm} from '../redux/booking/booking.action.js';
import SVG from 'react-inlinesvg';
import CheckIcon from '../../dist/icons/tick.svg';
import InfoIcon from '../../dist/icons/Info_Simple.svg';

class ViewDetailsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.toggleCalendarView = this.toggleCalendarView.bind(this);
    this.toggleGuestsFormView = this.toggleGuestsFormView.bind(this);
  }

  componentDidMount() {

  }

  toggleCalendarView(e) {
    this.props.toggleCalendar();
  }

  toggleGuestsFormView(e) {
    this.props.toggleGuestsForm();
  }

  render() {
    return (
      <div className='al-view-details-form'>
        <div className='al-view-details-form-title-container'>
          <span className='al-view-details-form-title-text'>Booking summary</span>
        </div>
        <div className='al-view-details-form-close-button-container'>
          <span onClick={this.props.closeView} className='al-view-details-form-title-text-close al-gray'>x</span>
        </div>
        <div className='al-view-details-form-valid-dates-container'>
          <div className='al-view-details-form-icon-container'>
            <SVG className='al-view-details-form-icon' src={CheckIcon} />
          </div>
          <div className='al-view-details-form-valid-dates-text-container'>
            <span className='al-view-details-form-valid-dates-text'>Your dates are available</span>
          </div>
        </div>
        <div className='al-view-details-form-dates-container' onClick={this.toggleCalendarView}>
          <div className='al-view-details-form-check-in-container'>
            <div className='al-view-details-form-check-in-label-container'>
              <span className='al-view-details-form-check-in-label-text'>Check In</span>
            </div>
            <div className='al-view-details-form-check-in-date-container'>
              <span className='al-view-details-form-check-in-date-text'>{this.props.selectCheckInDate}</span>
            </div>
          </div>
          <div className='al-view-details-form-check-out-container'>
            <div className='al-view-details-form-check-in-label-container'>
              <span className='al-view-details-form-check-in-label-text'>Check Out</span>
            </div>
            <div className='al-view-details-form-check-in-date-container'>
              <span className='al-view-details-form-check-in-date-text'>{this.props.selectCheckOutDate}</span>
            </div>
          </div>
        </div>
        <div className='al-view-details-form-guests-container' onClick={this.toggleGuestsFormView}>
          <div className='al-view-details-form-check-in-label-container'>
            <span className='al-view-details-form-check-in-label-text'>Guests</span>
          </div>
          <div className='al-view-details-form-check-in-date-container'>
            <span className='al-view-details-form-check-in-date-text'>{`${this.props.selectGuests} ${this.props.selectGuests === 1 ? 'guest' : 'guests'}`}</span>
          </div>
        </div>
        <div className='al-view-details-form-fee-container'>
          <div className='al-view-details-form-fee-breakdown-container'>
            <div className='al-view-details-form-field-container'>
              <span className='al-view-details-form-breakdown-text'>{`$${this.props.selectRate} x ${this.props.selectDays} ${this.props.selectDays === 1 ? 'night' : 'nights'}`}</span>
            </div>
            <div className='al-view-details-form-cost-container'>
              <span className='al-view-details-form-breakdown-text'>{`$${(this.props.selectRate * this.props.selectDays).toFixed(2)}`}</span>
            </div>
          </div>
          <div className='al-view-details-form-fee-breakdown-container'>
            <div className='al-view-details-form-field-container'>
              <span className='al-view-details-form-breakdown-text'>Cleaning Fee</span>
            </div>
            <div className='al-view-details-form-cost-container'>
              <span className='al-view-details-form-breakdown-text'>{`$${(this.props.selectCleaningFee * Math.pow(this.props.selectGuests, 0.5)).toFixed(2)}`}</span>
            </div>
          </div>
          <div className='al-view-details-form-fee-breakdown-container'>
            <div className='al-view-details-form-field-container'>
              <div className='al-view-details-form-breakdown-line-container al-gap'>
                <span className='al-view-details-form-breakdown-text'>Service Fee</span>
              </div>
              <div className='al-view-details-form-breakdown-line-container'>
                <SVG className='al-view-details-form-icon al-clickable' src={InfoIcon}/>
              </div>
            </div>
            <div className='al-view-details-form-cost-container'>
              <span className='al-view-details-form-breakdown-text'>{`$${this.props.selectFee}.00`}</span>
            </div>
          </div>
          <div className='al-view-details-form-fee-breakdown-container'>
            <div className='al-view-details-form-field-container'>
              <span className='al-view-details-form-breakdown-text'>Tax</span>
            </div>
            <div className='al-view-details-form-cost-container'>
              <span className='al-view-details-form-breakdown-text'>{`$${((this.props.selectRate * this.props.selectDays + this.props.selectCleaningFee * Math.pow(this.props.selectGuests, 0.5) + this.props.selectFee) * 0.1).toFixed(2)}`}</span>
            </div>
          </div>
        </div>
        <div className='al-top-dotted-line'>
          <hr className='al-dotted-line'/>
        </div>
        <div className='al-view-details-form-fee-container-second'>
          <div className='al-view-details-form-fee-breakdown-container'>
            <div className='al-view-details-form-field-container'>
              <span className='al-view-details-form-breakdown-text'><strong>Total</strong></span>
            </div>
            <div className='al-view-details-form-cost-container'>
              <span className='al-view-details-form-breakdown-text'><strong>{`$${((this.props.selectRate * this.props.selectDays + this.props.selectCleaningFee * Math.pow(this.props.selectGuests, 0.5) + this.props.selectFee) * 1.1).toFixed(2)}`}</strong></span>
            </div>
          </div>
        <div className='al-view-details-form-fee-breakdown-container'>
          <div className='al-view-details-form-field-container'>
            <div className='al-view-details-form-breakdown-line-container al-gap'>
              <span className='al-view-details-form-breakdown-text'>Refundable Damage Deposit</span>
            </div>
            <div className='al-view-details-form-breakdown-line-container'>
              <SVG className='al-view-details-form-icon al-clickable' src={InfoIcon}/>
            </div>
          </div>
          <div className='al-view-details-form-cost-container'>
            <span className='al-view-details-form-breakdown-text'>{`$250.00`}</span>
          </div>
        </div>
        <div className='al-view-details-form-fee-breakdown-container'>
          <div className='al-view-details-form-field-container'>
            <span className='al-view-details-form-breakdown-text'>Total + deposit</span>
          </div>
          <div className='al-view-details-form-cost-container'>
            <span className='al-view-details-form-breakdown-text'>{`$${(this.props.selectTotal + 250).toFixed(2)}`}</span>
          </div>
        </div>
        </div>
        <div className='al-top-dotted-line'>
          <hr className='al-dotted-line'/>
        </div>
        <div className='al-view-details-form-fee-container-third'>
          <div className='al-view-details-form-cost-container1'>
            <span className='al-view-details-form-breakdown-text'><strong>{`Your payment is    $${(this.props.selectTotal + 250).toFixed(2)}`}</strong></span>
          </div>
        </div>
        <div className='al-top-dotted-line2'>
          <hr className='al-dotted-line'/>
        </div>
        <div className='al-view-details-form-fee-container-third'>
          <div className='al-view-details-form-footer-first-line-container'>
            <span className='al-view-details-form-breakdown-text'>Due Onsite:</span>
          </div>
          <div className='al-view-details-form-footer-second-line-container'>
            <span className='al-view-details-form-breakdown-text'>Extra charges may be applied by the property manager (including amounts related to optional goods and services)</span>
          </div>
        </div>
        <div className='al-view-details-form-fee-container-fourth'>
          <div className='al-view-details-form-bottom-button-container'>
            <button className='al-view-details-form-bottom-button'><span className='al-view-details-form-bottom-button-text'>Continue booking</span></button>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return ({
      selectCheckInDate: selectCheckInDate(state),
      selectCheckOutDate: selectCheckOutDate(state),
      selectRate: selectRate(state),
      selectFee: selectFee(state),
      selectCleaningFee: selectCleaningFee(state),
      selectGuests: selectGuests(state),
      selectTotal: selectTotal(state),
      selectDays: selectDays(state)
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
      toggleCalendar: () => dispatch(toggleCalendar()),
      toggleGuestsForm: () => dispatch(toggleGuestsForm())
   });
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewDetailsForm);