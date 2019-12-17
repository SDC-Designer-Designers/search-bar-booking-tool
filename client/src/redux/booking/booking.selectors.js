// jshint esversion:6
import { createSelector } from 'reselect';

const selectBooking = state => state.booking;

export const selectCheckInDate = createSelector(
  [selectBooking],
  booking => booking.check_in
);

export const selectSearchTerm = createSelector(
  [selectBooking],
  booking => booking.searchterm
);

export const selectCheckOutDate = createSelector(
  [selectBooking],
  booking => booking.check_out
);

export const selectCheckInDate1 = createSelector(
  [selectBooking],
  booking => booking.check_in1
);

export const selectCheckOutDate1 = createSelector(
  [selectBooking],
  booking => booking.check_out1
);

export const selectRate = createSelector(
  [selectBooking],
  booking => booking.rate
);

export const selectTotal = createSelector(
  [selectBooking],
  booking => booking.total
);

export const selectFee = createSelector(
  [selectBooking],
  booking => booking.fee
);

export const selectValid = createSelector(
  [selectBooking],
  booking => booking.valid
);

export const selectTitle = createSelector(
  [selectBooking],
  booking => booking.title
);

export const selectSleepCapacity = createSelector(
  [selectBooking],
  booking => booking.sleep_capacity
);

export const selectReviewOverview = createSelector(
  [selectBooking],
  booking => booking.review_overview
);

export const selectRating = createSelector(
  [selectBooking],
  booking => booking.rating
);

export const selectGuests = createSelector(
  [selectBooking],
  booking => booking.guests
);

export const selectReviewNumber = createSelector(
  [selectBooking],
  booking => booking.review_number
);

export const selectOwner = createSelector(
  [selectBooking],
  booking => booking.owner
);

export const selectCalendar = createSelector(
  [selectBooking],
  booking => booking.calendar
);

export const selectGuestsForm = createSelector(
  [selectBooking],
  booking => booking.guestsform
);

export const selectCleaningFee = createSelector(
  [selectBooking],
  booking => booking.cleaning_fee
);

export const selectUSState = createSelector(
  [selectBooking],
  booking => booking.us_state
);

export const selectCity = createSelector(
  [selectBooking],
  booking => booking.city
);

export const selectPic = createSelector(
  [selectBooking],
  booking => booking.pic
);

export const selectLoading = createSelector(
  [selectBooking],
  booking => booking.loading
);

export const selectDays = createSelector(
  [selectBooking],
  booking => booking.days
);