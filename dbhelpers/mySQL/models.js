// jshint esversion:6
const Sequelize = require('sequelize');
const sequelize = new Sequelize('SDCmySQLsearch', 'root', null, {
    dialect: 'mysql',
    logging: false
});

const BookingDate = sequelize.define('Date', {
  date: {
    type: Sequelize.DATEONLY
  },
  available: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
    check_in: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  rate: {
    type: Sequelize.FLOAT(10, 2)
  },
  check_out: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

const Listing = sequelize.define('Listing', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
    // unique: true
  },
  venue_type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  bedrooms: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  bathrooms: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  sleep_capacity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  square_feet: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  review_overview: {
    type: Sequelize.STRING,
    allowNull: false
  },
  rating: {
    type: Sequelize.FLOAT(10,2),
    allowNull: false
  },
  review_number: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  owner: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cleaning_fee: {
    type: Sequelize.FLOAT(10,2),
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pic: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// BookingDate.belongsTo(Listing);
// Listing.hasMany(BookingDate);

module.exports.BookingDate = BookingDate;
module.exports.Listing = Listing;