// jshint esversion:6
import React from 'react';
import SVG from 'react-inlinesvg';
import LightningIcon from '../../dist/icons/flash.svg';
import UploadIcon from '../../dist/icons/upload.svg';
import HeartIcon from '../../dist/icons/heart.svg';
import SharedDropdown from './shared-dropdown.jsx';
import SelectedDropdown from './selected-dropdown.jsx';
import Overlay from './overlay.jsx';
import {LoadingDots} from './loading-dots.jsx';
import { connect } from 'react-redux';
import {selectLoading, selectRate} from '../redux/booking/booking.selectors.js';

class BookingHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shared: false,
      selected: false,
      loading: false
    };
    this.handleClickShared = this.handleClickShared.bind(this);
    this.handleClickSelected = this.handleClickSelected.bind(this);
    this.handleCloseShared = this.handleCloseShared.bind(this);
    this.handleCloseSelected = this.handleCloseSelected.bind(this);
  }

  handleClickShared(e) {
    this.setState({shared: true, selected: false});
  }

  handleClickSelected(e) {
    this.setState({selected: true, shared: false});
  }

  handleCloseShared(e) {
    this.setState({shared: false});
  }

  handleCloseSelected(e) {
    this.setState({selected: false});
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='al-booking-header'>
      {
        this.props.selectLoading ?
        (
          <div className='al-loading-dots-container'>
            <LoadingDots />
          </div>
        )
        :
        (
          <div className='al-booking-subcontainer'>
            <div className='al-booking-header-flash-container'>
              <SVG className='al-booking-header-flash' src={LightningIcon} />
            </div>
            <div className='al-booking-header-rate-container'>
              <h1 className='al-booking-header-rate-text'>{`$${this.props.selectRate}`}</h1>
            </div>
            <div className='al-booking-header-nightly-container'>
              <span className='al-booking-header-nightly-text'>per night</span>
            </div>
            <div className='al-booking-header-icons-container'>
                <div onClick={this.handleClickShared} className='al-booking-header-icon-container'>
                  <SVG className='al-booking-header-icon' src={UploadIcon} />
                </div>
                <div onClick={this.handleClickSelected} className='al-booking-header-icon-container'>
                  <SVG className='al-booking-header-icon' src={HeartIcon} />
                </div>
              </div>
              <div className='al-shared-dropdown-container'>
              {
                this.state.shared ?
                (
                  <SharedDropdown handleCloseShared={this.handleCloseShared}/>
                )
                :
                (
                  null
                )
              }
              </div>
              <div className='al-selected-dropdown-container'>
              {
                this.state.selected ?
                (
                  <div>
                    <SelectedDropdown handleCloseSelected={this.handleCloseSelected}/>
                    <Overlay />
                  </div>
                )
                :
                (
                  null
                )
              }
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
      selectLoading: selectLoading(state),
      selectRate: selectRate(state)
  });
};

export default connect(mapStateToProps, null)(BookingHeader);
