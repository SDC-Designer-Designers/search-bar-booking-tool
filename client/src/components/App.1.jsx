// jshint esversion:6
import React from 'react';
import Header from './header.jsx';
import Sidebar from './sidebar.jsx';
import axios from 'axios';
import {setRate, setTotal, setTitle, setSleepCapacity, setReviewOverview, setRating, setReviewNumber, setOwner, setCleaningFee, setUSState, setCity, setPic} from '../redux/booking/booking.action.js';
import { connect } from 'react-redux';

class App1 extends React.Component {
  constructor() {
    super();
    this.state = {
      check_in_date: '',
      check_out_date: '',
      adults: null,
      children: null,
      reviews: null,
      cleaning_fee: null,
      owner: '',
      rating: null,
      total: null
    };
  }

  componentDidMount() {
    // let randomNumber = Math.floor(Math.random() * 104) + 1;
    // axios.get(`/mlistings/${randomNumber}`)
    // .then((results) => results.data[0]).catch(err => console.log(err))
    // .then(data => {
    //   this.props.setTitle(data.title);
    //   this.props.setSleepCapacity(data.sleep_capacity);
    //   this.props.setUSState(data.state);
    //   this.props.setReviewOverview(data.review_overview);
    //   this.props.setRating(data.rating);
    //   this.props.setReviewNumber(data.review_number);
    //   this.props.setOwner(data.owner);
    //   this.props.setCleaningFee(data.cleaning_fee);
    //   this.props.setCity(data.city);
    //   this.props.setPic(data.pic);
    //   return data.id;
    // })
    // .then(id => axios.get(`/dates/${id}`))
    // .then(dates => this.props.setRate(dates.data[0].rate))
    // .catch(error => console.log(error));
    // ;
  }

  render() {
    return (
      <div className='al-test-container'>
        <div className='al-sidebar-container'>
          <Sidebar />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
      setRate: (rate) => dispatch(setRate(rate)),
      setTotal: (total) => dispatch(setTotal(total)),
      setTitle: (title) => dispatch(setTitle(title)),
      setSleepCapacity: (sleep_capacity) => dispatch(setSleepCapacity(sleep_capacity)),
      setReviewOverview: (review_overview) => dispatch(setReviewOverview(review_overview)),
      setRating: (rating) => dispatch(setRating(rating)),
      setReviewNumber: (review_number) => dispatch(setReviewNumber(review_number)),
      setOwner: (owner) => dispatch(setOwner(owner)),
      setCleaningFee: (cleaning_fee) => dispatch(setCleaningFee(cleaning_fee)),
      setUSState: (USState) => dispatch(setUSState(USState)),
      setCity: (city) => dispatch(setCity(city)),
      setPic: (pic) => dispatch(setPic(pic))
   });
}

export default connect(null, mapDispatchToProps)(App1);
