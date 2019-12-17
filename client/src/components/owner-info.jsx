// jshint esversion:6
import React from 'react';
import {selectOwner, selectPic} from '../redux/booking/booking.selectors.js';
import { connect } from 'react-redux';

class OwnerInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileUrl: './icons/sampleimage.jpg'
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='al-owner-info'>
        <div className='al-owner-info-pic-container'>
          <img className='al-owner-info-pic' src={this.props.selectPic}/>
        </div>
        <div className='al-owner-info-text-container'>
          <div className='al-owner-info-owner-name-container'>
            <span className='al-owner-info-owner-name-text'>{this.props.selectOwner}</span>
          </div>
          <div className='al-owner-info-question-link-container'>
            <span className='al-owner-info-question-link-text'>Ask owner a question</span>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return ({
      selectOwner: selectOwner(state),
      selectPic: selectPic(state)
  });
};

export default connect(mapStateToProps, null)(OwnerInfo);