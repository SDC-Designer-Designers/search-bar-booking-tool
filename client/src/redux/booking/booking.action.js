// jshint esversion:6

export const setCheckInDate = (date) => {
  return ({
    type: 'SET_CHECK_IN_DATE',
    payload: date
  });
};

export const setCheckOutDate = (date) => {
  return ({
    type: 'SET_CHECK_OUT_DATE',
    payload: date
  });
};


export const setCheckInDate1 = (date) => {
  return ({
    type: 'SET_CHECK_IN_DATE1',
    payload: date
  });
};

export const setCheckOutDate1 = (date) => {
  return ({
    type: 'SET_CHECK_OUT_DATE1',
    payload: date
  });
};

export const setRate = (rate) => {
  return ({
    type: 'SET_RATE',
    payload: rate
  });
};

export const setTotal = (total) => {
  return ({
    type: 'SET_TOTAL',
    payload: total
  });
};

export const setFee = (fee) => {
  return ({
    type: 'SET_FEE',
    payload: fee
  });
};

export const makeValid = () => {
  return ({
    type: 'MAKE_VALID'
  });
};

export const makeInvalid = () => {
  return ({
    type: 'MAKE_INVALID'
  });
};

export const setTitle = (title) => {
  return ({
    type: 'SET_TITLE',
    payload: title
  });
};

export const setSleepCapacity = (sleepCapacity) => {
  return ({
    type: 'SET_SLEEP_CAPACITY',
    payload: sleepCapacity
  });
};

export const setReviewOverview = (reviewOverview) => {
  return ({
    type: 'SET_REVIEW_OVERVIEW',
    payload: reviewOverview
  });
};

export const setRating = (rating) => {
  return ({
    type: 'SET_RATING',
    payload: rating
  });
};

export const setReviewNumber = (number) => {
  return ({
    type: 'SET_REVIEW_NUMBER',
    payload: number
  });
};

export const setOwner = (owner) => {
  return ({
    type: 'SET_OWNER',
    payload: owner
  });
};

export const setCleaningFee = (cleaningFee) => {
  return ({
    type: 'SET_CLEANING_FEE',
    payload: cleaningFee
  });
};

export const setUSState = (USState) => {
  return ({
    type: 'SET_US_STATE',
    payload: USState
  });
};

export const setCity = (city) => {
  return ({
    type: 'SET_CITY',
    payload: city
  });
};

export const setPic = (url) => {
  return ({
    type: 'SET_URL',
    payload: url
  });
};

export const startLoading = () => {
  return ({
    type: 'START_LOADING'
  });
};

export const stopLoading = () => {
  return ({
    type: 'STOP_LOADING'
  });
};

export const setGuests = (guests) => {
  return ({
    type: 'SET_GUESTS',
    payload: guests
  });
};

export const setDays = (days) => {
  return ({
    type: 'SET_DAYS',
    payload: days
  });
};

export const toggleGuestsForm = () => {
  return ({
    type: 'TOGGLE_GUESTS_FORM'
  });
};

export const toggleCalendar = () => {
  return ({
    type: 'TOGGLE_CALENDAR'
  });
};

export const setSearchTerm = (e) => {
  return ({
    type: 'SET_SEARCH_TERM',
    payload: e
  });
}