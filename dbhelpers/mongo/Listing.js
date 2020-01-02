const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const AutoIncrement = require('mongoose-sequence')(mongoose);

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
}, {collection: 'listing'})

listingsSchema.plugin(AutoIncrement, {inc_field: 'id', start_seq: 10000001})

const Listing = mongoose.model('Listing', listingsSchema);

module.exports = Listing;