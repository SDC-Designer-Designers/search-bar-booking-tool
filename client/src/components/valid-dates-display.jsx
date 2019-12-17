// jshint esversion:6
import React from 'react';
import SVG from 'react-inlinesvg';
import CheckIcon from '../../dist/icons/tick.svg';
import { connect } from 'react-redux';
import {selectValid} from '../redux/booking/booking.selectors.js';

class ValidDatesDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: false
    };
    this.toggleValid = this.toggleValid.bind(this);
  }

  toggleValid(e) {
    this.setState({valid: !this.state.valid});
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='al-valid-dates-display'>
      {
        this.props.selectValid ?
        (
          <div className='al-valid-dates-display-valid-container'>
            <div className='al-valid-dates-display-icon-container'>
              <SVG className='al-valid-dates-display-icon' src={CheckIcon}/>
            </div>
            <div className='al-valid-dates-display-text-container'>
              <span className='al-valid-dates-display-text-valid'>Your dates are available</span>
            </div>
          </div>
        )
        :
        (
          <div>
            <div className='al-valid-dates-display-rectangle'>
              <div className='al-valid-dates-display-message-container'>
                <span className='al-valid-dates-display-text'>Enter dates for accurate pricing</span>
              </div>
            </div>
            <div className='al-valid-dates-display-triangle-container'>
              <div className='al-valid-dates-display-triangle'></div>
            </div>
          </div>
        )
      }
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return ({
      selectValid: selectValid(state)
  });
};

export default connect(mapStateToProps, null)(ValidDatesDisplay);