// jshint esversion:6
import React from 'react';
import SearchBar from './search-bar.jsx';
import CheckInInput from './check-in-input.jsx';
import CheckOutInput from './check-out-input.jsx';
import SearchButton from './search-button.jsx';
import CalendarDisplay from './calendar-display.jsx';
import { connect } from 'react-redux';
import {setSearchTerm, setRate, setTitle, setCleaningFee, setSleepCapacity, setReviewNumber, setReviewOverview, setRating, setOwner, setUSState, setCity, setPic, setCheckInDate1, setCheckOutDate1, makeInvalid } from '../redux/booking/booking.action.js';
import {selectCheckInDate1, selectCheckOutDate1} from '../redux/booking/booking.selectors.js';
import axios from 'axios';
import SearchDropdown from './search-dropdown.jsx';

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      term: '',
      check_in: '',
      check_out: '',
      calendar: false,
      searchlistings: [],
      title: '',
      cleaningfee: 0,
      sleepcapacity: 0,
      reviewnumber: 0,
      reviewoverview: '',
      owner: '',
      rating: 0,
      usstate: '',
      city: '',
      pic: '',
      rate: 0,
      selected: false,
      clicked: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckInSelect = this.handleCheckInSelect.bind(this);
    this.handleCheckOutSelect = this.handleCheckOutSelect.bind(this);
    this.openCalendar = this.openCalendar.bind(this);
    this.closeCalendar = this.closeCalendar.bind(this);
    this.searchListings = this.searchListings.bind(this);
    this.selectSearchResult = this.selectSearchResult.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

  }

  openCalendar(e) {
    this.setState({calendar: true});
  }

  closeCalendar(e) {
    this.setState({calendar: false});
  }

  searchListings() {
    if (this.state.term) {
      axios.get(`/listings/search`, {
        params: {query: this.state.term}
      }).then(results => results.data)
      .then(data => this.setState({searchlistings: data}))
      .then(() => this.setState({clicked: false}))
      .catch(err => console.log(err));
    }
  }

  selectSearchResult(id) {
    this.setState({term: '', searchlistings: []}, () => {
      axios.get(`/mlistings/${id}`)
      .then(results => results.data[0])
      .then(data => {
        this.setState({title: data.title}, () => this.setState({cleaningfee: data.cleaning_fee}, () => this.setState({sleepcapacity: data.sleep_capacity}, () => this.setState({reviewnumber: data.review_number}, () => this.setState({reviewoverview: data.review_overview}, () => this.setState({owner: data.owner}, this.setState({rating: data.rating}, () => this.setState({usstate: data.state}, () => this.setState({city: data.city}, () => this.setState({pic: data.pic}, () => null))))))))));
      }).then(() => axios.get(`/dates/${id}`)).then(datesData => {
        this.setState({rate: datesData.data[0].rate}, () => {
          this.setState({selected: true}, () => this.setState({clicked: true}));
          if (!this.state.calendar) {
            this.setState({calendar: true});
          }
        });
        // this.props.setRate(datesData.data[0].rate);

      }).catch(err => console.log(err));
    });
  }

  handleSubmit(e) {
    window.location.reload();
    // if (this.state.selected && this.props.selectCheckInDate1 && this.props.selectCheckOutDate1) {
    //   this.props.setTitle(this.state.title);
    //   this.props.setCleaningFee(this.state.cleaningfee);
    //   this.props.setSleepCapacity(this.state.sleepcapacity);
    //   this.props.setReviewNumber(this.state.reviewnumber);
    //   this.props.setReviewOverview(this.state.reviewoverview);
    //   this.props.setOwner(this.state.owner);
    //   this.props.setRating(this.state.rating);
    //   this.props.setUSState(this.state.usstate);
    //   this.props.setCity(this.state.city);
    //   this.props.setPic(this.state.pic);
    //   this.props.setRate(this.state.rate);
    //   this.props.setCheckInDate1('');
    //   this.props.setCheckOutDate1('');
    //   this.props.makeInvalid();
    // }
  }

  handleChange(e) {
    this.setState({term: e.target.value}, () => this.searchListings());
  }

  handleCheckInSelect(e) {
    this.setState({check_in: e.target.value});
  }

  handleCheckOutSelect(e) {
    this.setState({check_out: e.target.value});
  }

  render() {
    return (
      <div className='al-search-form-container'>
        <SearchBar handleChange={this.handleChange} term={this.state.clicked ? this.state.city + ', ' + this.state.usstate : this.state.term}/>
        <CheckInInput check_in={this.state.check_in} handleCheckInSelect={this.handleCheckInSelect} openCalendar={this.openCalendar}/>
        <CheckOutInput check_out={this.state.check_out} handleCheckOutSelect={this.handleCheckOutSelect} openCalendar={this.openCalendar}/>
        <SearchButton handleSubmit={this.handleSubmit}/>
        <div className='al-search-form-calendar-container'>
          {
            this.state.calendar ?
            (
              <CalendarDisplay closeCalendar={this.closeCalendar}/>
            )
            :
            (
              null
            )
          }
        </div>
        <div className='al-search-dropdown-container'>
        {
          this.state.term.length ?
          (
            <SearchDropdown selectSearchResult={this.selectSearchResult} searchlistings={this.state.searchlistings.slice(0, 10)}/>
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

// export default SearchForm;

const mapDispatchToProps = (dispatch) => {
  return ({
    setSearchTerm: (term) => dispatch(setSearchTerm(term)),
    setRate: (rate) => dispatch(setRate(rate)),
    setTitle: (title) => dispatch(setTitle(title)),
    setCleaningFee: (cleaningFee) => dispatch(setCleaningFee(cleaningFee)),
    setSleepCapacity: (sleepCapacity) => dispatch(setSleepCapacity(sleepCapacity)),
    setReviewNumber: (reviewNumber) => dispatch(setReviewNumber(reviewNumber)),
    setReviewOverview: (reviewOverview) => dispatch(setReviewOverview(reviewOverview)),
    setRating: (rating) => dispatch(setRating(rating)),
    setOwner: (owner) => dispatch(setOwner(owner)),
    setUSState: (USState) => dispatch(setUSState(USState)),
    setCity: (city) => dispatch(setCity(city)),
    setPic: (pic) => dispatch(setPic(pic)),
    setCheckInDate1: (date) => dispatch(setCheckInDate1(date)),
    setCheckOutDate1: (date) => dispatch(setCheckOutDate1(date)),
    makeInvalid: () => dispatch(makeInvalid())
   });
}

const mapStateToProps = (state) => {
  return ({
    selectCheckInDate1: selectCheckInDate1(state),
    selectCheckOutDate1: selectCheckOutDate1(state)
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);