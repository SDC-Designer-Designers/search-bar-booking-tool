// jshint esversion:6

const INITIAL_STATE = {
  check_in: '',
  check_out: '',
  check_in1: '',
  check_out1: '',
  rate: 0.00,
  total: 0.00,
  fee: 50.00,
  valid: false,
  title: '',
  sleep_capacity: 1,
  review_overview: '',
  rating: 0,
  review_number: 0,
  owner: '',
  cleaning_fee: 0.00,
  us_state: '',
  city: '',
  pic: '',
  loading: false,
  guests: 1,
  days: 0,
  guestsform: false,
  calendar: false,
  searchterm: ''
};

const BookingReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return ({
        ...state,
        searchterm: action.payload
      });
    case 'TOGGLE_GUESTS_FORM':
      return ({
        ...state,
        guestsform: !state.guestsform
      });
    case 'TOGGLE_CALENDAR':
      return ({
        ...state,
        calendar: !state.calendar
      });
    case 'SET_CHECK_IN_DATE':
      return ({
        ...state,
        check_in: action.payload
      });
    case 'SET_DAYS':
      return ({
        ...state,
        days: action.payload
      });
    case 'SET_CHECK_OUT_DATE':
      return ({
        ...state,
        check_out: action.payload
      });
    case 'SET_CHECK_IN_DATE1':
      return ({
        ...state,
        check_in1: action.payload
      });
    case 'SET_CHECK_OUT_DATE1':
      return ({
        ...state,
        check_out1: action.payload
      });
    case 'SET_RATE':
      return ({
        ...state,
        rate: action.payload
      });
    case 'SET_TOTAL':
      return ({
        ...state,
        total: action.payload
      });
    case 'SET_FEE':
      return ({
        ...state,
        fee: action.payload
      });
    case 'MAKE_VALID':
      return ({
        ...state,
        valid: true
      });
    case 'MAKE_INVALID':
      return ({
        ...state,
        valid: false
      });
    case 'SET_TITLE':
      return ({
        ...state,
        title: action.payload
      });
    case 'SET_SLEEP_CAPACITY':
      return ({
        ...state,
        sleep_capacity: action.payload
      });
    case 'SET_REVIEW_OVERVIEW':
      return ({
        ...state,
        review_overview: action.payload
      });
    case 'SET_RATING':
      return ({
        ...state,
        rating: action.payload
      });
    case 'SET_REVIEW_NUMBER':
      return ({
        ...state,
        review_number: action.payload
      });
    case 'SET_OWNER':
      return ({
        ...state,
        owner: action.payload
      });
    case 'SET_CLEANING_FEE':
      return ({
        ...state,
        cleaning_fee: action.payload
      });
    case 'SET_US_STATE':
      return ({
        ...state,
        us_state: action.payload
      });
    case 'SET_CITY':
      return ({
        ...state,
        city: action.payload
      });
    case 'SET_URL':
      return ({
        ...state,
        pic: action.payload
      });
    case 'START_LOADING':
      return ({
        ...state,
        loading: true
      });
    case 'STOP_LOADING':
      return ({
        ...state,
        loading: false
      });
    case 'SET_GUESTS':
      return ({
        ...state,
        guests: action.payload
      });
    default:
      return state;
  }
};

export default BookingReducer;