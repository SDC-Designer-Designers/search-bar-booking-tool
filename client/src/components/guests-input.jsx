// jshint esversion:6
import React from 'react';
import GuestsForm from './guests-form.jsx';
import { connect } from 'react-redux';
import { selectGuests, selectGuestsForm } from '../redux/booking/booking.selectors.js';
import { toggleGuestsForm } from '../redux/booking/booking.action.js';

class GuestsInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: 1,
      selected: false
    };
    this.getGuests = this.getGuests.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  getGuests(n) {
    this.setState({guests: n});
  }

  toggleForm(e) {
    this.props.toggleGuestsForm();
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='al-guests-input'>
        <div className='al-guests-input-label-container'>
          <span className='al-guests-input-label-text-bottom'>Guests</span>
        </div>
        <div className='al-guests-input-number-container' onClick={this.toggleForm}>
          <span className='al-guests-input-number-text'>{`${this.props.selectGuests} ${this.props.selectGuests === 1 ? 'guest' : 'guests'}`}</span>
        </div>
        <div className='al-guests-form-container'>
        {
          this.props.selectGuestsForm ?
          (
            <GuestsForm handleCloseGuestsForm={this.props.handleCloseGuestsForm} getGuests={this.getGuests}/>
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
};

const mapDispatchToProps = (dispatch) => {
  return ({
      toggleGuestsForm: () => dispatch(toggleGuestsForm())
   });
}

const mapStateToProps = (state) => {
  return ({
      selectGuests: selectGuests(state),
      selectGuestsForm: selectGuestsForm(state)
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(GuestsInput);