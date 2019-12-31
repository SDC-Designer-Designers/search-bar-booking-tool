const mongoose = require('mongoose');

const listingsSchema = new mongoose.Schema({
  id: Number, // replace this with auto incrementing value
  title: String,
  venue_type: String,
  bedrooms: Number,
  bathrooms: Number,
  sleep_capacity: Number,
  square_feet: Number,
  review_overview: String,
  rating: Number, // may need to review this type, original is NUMERIC(10, 2)
  review_number: Number,
  owner: String,
  cleaning_fee: Number, // may need to review this type, original is NUMERIC(10, 2)
  state: String,
  city: String,
  pic: String
})

const Listing = mongoose.model('Listing', listingsSchema);

module.exports = Listing;