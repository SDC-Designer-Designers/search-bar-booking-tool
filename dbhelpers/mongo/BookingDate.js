const mongoose = require('mongoose');

const bookingDateSchema = new mongoose.Schema({
  date: String,
  available: Boolean,
  check_in: Boolean,
  rate: Number, // may need to review this type, original is NUMERIC(10, 2)
  check_out: Boolean,
  id: Number
})

const BookingDate = mongoose.model('BookingDate', bookingDateSchema);

module.exports = BookingDate;
