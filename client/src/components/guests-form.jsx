// jshint esversion:6
import React from 'react';
import SVG from 'react-inlinesvg';
import PeopleIcon from '../../dist/icons/people.svg';
import { connect } from 'react-redux';
import {toggleGuestsForm, setGuests, setCheckInDate, setCheckOutDate, setTotal, startLoading, stopLoading, makeValid, makeInvalid} from '../redux/booking/booking.action.js';
import { selectSleepCapacity, selectCheckInDate, selectCheckOutDate, selectRate, selectCleaningFee, selectFee, selectGuests} from '../redux/booking/booking.selectors.js';

class GuestsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adults: 1,
      children: 0
    };
    this.incrementAdults = this.incrementAdults.bind(this);
    this.incrementChildren = this.incrementChildren.bind(this);
    this.decrementAdults = this.decrementAdults.bind(this);
    this.decrementChildren = this.decrementChildren.bind(this);
    this.handleApply = this.handleApply.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.setLoading = this.setLoading.bind(this);
  }

  calculateTotal() {
    let date1 = new Date(this.props.selectCheckInDate);
    let date2 = new Date(this.props.selectCheckOutDate);
    let Difference_In_Time = date2.getTime() - date1.getTime();
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    console.log(Difference_In_Days);
    let subTotal = Difference_In_Days * this.props.selectRate + this.props.selectFee + this.props.selectCleaningFee * Math.pow(this.state.adults + this.state.children, 0.5);
    let total = subTotal * 1.1;
    this.props.setTotal(total);
    this.props.stopLoading();
  }

  setLoading() {
    if (this.props.selectCheckInDate && this.props.selectCheckOutDate) {
      this.props.startLoading();
      setTimeout(() => {
        this.calculateTotal();
      }, 3000);
    }
  }

  incrementAdults() {
    if (this.state.children + this.state.adults < this.props.selectSleepCapacity) {
      this.setState({adults: this.state.adults + 1}, () => {

      });
    }
  }

  incrementChildren() {
    if (this.state.children + this.state.adults < this.props.selectSleepCapacity) {
      this.setState({children: this.state.children + 1}, () => {

      });
    }
  }

  decrementAdults() {
    if (this.state.adults > 1) {
      this.setState({adults: this.state.adults - 1}, () => {

      });
    }
  }

  decrementChildren() {
    if (this.state.children > 0) {
      this.setState({children: this.state.children - 1}, () => {

      });
    }
  }

  handleApply() {
    this.props.setGuests(this.state.children + this.state.adults);
    this.props.toggleGuestsForm();
    this.setLoading();
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='al-guests-form'>
        <div className='al-guests-form-title-container'>
          <div className='al-guests-form-icon-container'>
            <SVG className='al-guests-form-icon' src={PeopleIcon}/>
          </div>
          <div className='al-guests-form-text-container'>
            <span className='al-guests-form-text'>{`Maximum number of guests is ${this.props.selectSleepCapacity}`}</span>
          </div>
        </div>
        <div className='al-guests-form-adults-row-container'>
          <div className='al-guests-form-adults-amount-container'>
            <span className='al-guests-form-row-text'>{`${this.state.adults} ${this.state.adults === 1 ? 'adult' : 'adults'}`}</span>
          </div>
          <div className='al-guests-form-change-amount-form-container'>
            <div className='al-guests-form-subtract-button-container'>
              <button className={`${this.state.adults === 1 ? 'al-guests-form-button-invalid' : 'al-guests-form-button-valid'} 'al-guests-form-subtract-button'`} onClick={this.decrementAdults}>
                <span className='al-guests-form-subtract-text'>-</span>
              </button>
            </div>
            <div className='al-guests-form-add-button-container'>
              <button className={`${this.state.adults + this.state.children === this.props.selectSleepCapacity ? 'al-guests-form-button-invalid' : 'al-guests-form-button-valid'} 'al-guests-form-add-button'`} onClick={this.incrementAdults}>
                <span className='al-guests-form-add-text'>+</span>
              </button>
            </div>
          </div>
        </div>
        <div className='al-guests-form-childrens-row-container'>
          <div className='al-guests-form-childrens-amount-container'>
            <span className='al-guests-form-row-text'>{`${this.state.children} ${this.state.children === 1 ? 'child' : 'children'}`}</span>
          </div>
          <div className='al-guests-form-change-amount-form-container'>
            <div className='al-guests-form-subtract-button-container'>
              <button className={`${this.state.children === 0 ? 'al-guests-form-button-invalid' : 'al-guests-form-button-valid'} 'al-guests-form-subtract-button'`} onClick={this.decrementChildren}>
                <span className='al-guests-form-subtract-text'>-</span>
              </button>
            </div>
            <div className='al-guests-form-add-button-container'>
              <button className={`${this.state.adults + this.state.children === this.props.selectSleepCapacity ? 'al-guests-form-button-invalid' : 'al-guests-form-button-valid'} 'al-guests-form-add-button'`} onClick={this.incrementChildren}>
                <span className='al-guests-form-add-text'>+</span>
              </button>
            </div>
          </div>
        </div>
        <div className='al-guests-form-submit-button-container'>
          <button className='al-guests-form-submit-button' onClick={this.handleApply}>
            <span className='al-guests-form-submit-button-text'>Apply</span>
          </button>
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return ({
      setGuests: (guests) => dispatch(setGuests(guests)),
      setCheckInDate: (date) => dispatch(setCheckInDate(date)),
      setCheckOutDate: (date) => dispatch(setCheckOutDate(date)),
      makeValid: () => dispatch(makeValid()),
      makeInvalid: () => dispatch(makeInvalid()),
      startLoading: () => dispatch(startLoading()),
      stopLoading: () => dispatch(stopLoading()),
      setTotal: (total) => dispatch(setTotal(total)),
      toggleGuestsForm: () => dispatch(toggleGuestsForm())
   });
}

const mapStateToProps = (state) => {
  return ({
      selectSleepCapacity: selectSleepCapacity(state),
      selectCheckInDate: selectCheckInDate(state),
      selectCheckOutDate: selectCheckOutDate(state),
      selectRate: selectRate(state),
      selectFee: selectFee(state),
      selectCleaningFee: selectCleaningFee(state),
      selectGuests: selectGuests(state)
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(GuestsForm);
