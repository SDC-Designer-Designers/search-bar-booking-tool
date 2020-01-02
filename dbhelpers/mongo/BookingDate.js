const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const bookingDateSchema = new mongoose.Schema({
  date: String,
  available: Boolean,
  check_in: Boolean,
  rate: Number, // may need to review this type, original is NUMERIC(10, 2)
  check_out: Boolean,
  listing_id: Number
}, {collection: 'bookingdate'})

const BookingDate = mongoose.model('BookingDate', bookingDateSchema);

module.exports = BookingDate;
