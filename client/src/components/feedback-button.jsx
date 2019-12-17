// jshint esversion:6
import React from 'react';
import FeedbackForm from './feedback-form.jsx';
import Overlay from './overlay.jsx';

class FeedbackButton extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: false
    };
    this.toggleFeedbackButton = this.toggleFeedbackButton.bind(this);
  }

  toggleFeedbackButton() {
    this.setState({selected: !this.state.selected});
  }

  render() {
    return (
      <div onClick={this.props.handleSelected} className='al-header-option-container2 al-feedback-button al-feedback-text'>
        <span className='al-header-option-text'>Feedback</span>
        <div className='al-feedback-form-container'>
        {
          this.props.selected ?
          (
            <Overlay />
          )
          :
          (
            null
          )
        }
        {
          this.props.selected ?
          (
            <FeedbackForm />
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

export default FeedbackButton;