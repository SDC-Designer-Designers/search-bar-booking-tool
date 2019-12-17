// jshint esversion:6
import React from 'react';
import {MainLoadingDots} from './loading-dots.jsx';
import {selectLoading} from '../redux/booking/booking.selectors.js';
import { connect } from 'react-redux';
import {selectTotal} from '../redux/booking/booking.selectors.js';
import ViewDetailsForm from './view-details-form.jsx';
import Overlay from './overlay.jsx';

class BookingTotal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: false,
      loading: true
    };
    this.openView = this.openView.bind(this);
    this.closeView = this.closeView.bind(this);
  }

  openView(e) {
    this.setState({view: true});
  }

  closeView(e) {
    this.setState({view: false});
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='al-booking-total'>
      {
        this.props.selectLoading ?
        (
          <div className='al-main-loading-dots-container'>
            <MainLoadingDots />
          </div>
        )
        :
        (
          <div>
            <div className='al-booking-total-top-container'>
              <div className='al-booking-total-total-container'>
                <span className='al-booking-total-total-text'>Total</span>
              </div>
              <div className='al-booking-total-amount-container'>
                <span className='al-booking-total-total-text'>{`$${this.props.selectTotal.toFixed(2)}`}</span>
              </div>
            </div>
            <div className='al-booking-bottom-top-container'>
              <div className='al-booking-details-container'>
                <span className='al-booking-details-text'>Includes taxes and fees</span>
              </div>
              <div className='al-booking-detailed-view-container'>
                <span className='al-booking-detailed-view-container' onClick={this.openView}>View details</span>
              </div>
            </div>
          </div>
        )
      }
      {
        this.state.view ?
        (
          <div>
            <div className='al-view-details-form-container'>
              <ViewDetailsForm closeView={this.closeView}/>
            </div>
            <Overlay />
          </div>
        )
        :
        (
          null
        )
      }
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return ({
      selectLoading: selectLoading(state),
      selectTotal: selectTotal(state)
  });
};

export default connect(mapStateToProps, null)(BookingTotal);
