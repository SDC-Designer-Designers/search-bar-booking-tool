
// believe this file can be removed, TBD

const db = require('./connection.js');
const BookingDate = require('./BookingDate.js');
const Listing = require('./Listing.js');

const createCollections = () => {
  BookingDate.deleteMany({})
    .then(Listing.deleteMany({}))
    .then(BookingDate.create())
    .then(Listing.create())
    .then(process.exit())
}

createCollections();