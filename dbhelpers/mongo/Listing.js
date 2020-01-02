const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const listingsSchema = new mongoose.Schema({
  ID: Number, // replace this with auto incrementing value
  TITLE: String,
  VENUE_TYPE: String,
  BEDROOMS: Number,
  BATHROOMS: Number,
  SLEEP_CAPACITY: Number,
  SQUARE_FEET: Number,
  REVIEW_OVERVIEW: String,
  RATING: Number, // may need to review this type, original is NUMERIC(10, 2)
  REVIEW_NUMBER: Number,
  OWNER: String,
  CLEANING_FEE: Number, // may need to review this type, original is NUMERIC(10, 2)
  STATE: String,
  CITY: String,
  PIC: String
}, {collection: 'listing'})

listingsSchema.plugin(AutoIncrement, {inc_field: 'ID', start_seq: 100000})

const Listing = mongoose.model('Listing', listingsSchema);

module.exports = Listing;