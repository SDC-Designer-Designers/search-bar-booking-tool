// jshint esversion:6
import React from 'react';
import { connect } from 'react-redux';
import { selectCheckInDate1, selectCheckOutDate1 } from '../redux/booking/booking.selectors.js';

class CheckInInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({selected: true}, () => {
      this.props.openCalendar();
    });
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='al-check-in-input-container'>
        <input className='al-input-bar' size="20" onChange={this.props.handleCheckInSelect} value={this.props.selectCheckInDate1} onClick={this.handleClick}/>
        <label className={`${this.props.selectCheckInDate1 ? 'al-shrink' : ''} al-form-input-label al-check-in-input`}>{this.state.selected ? 'Check In' : 'Check In'}</label>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return ({
      selectCheckInDate1: selectCheckInDate1(state),
      selectCheckOutDate1: selectCheckOutDate1(state)
  });
};

export default connect(mapStateToProps, null)(CheckInInput);