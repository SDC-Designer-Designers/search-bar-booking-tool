var mongoose = require('mongoose');
require('dotenv').config();
var mongoUri = "mongodb://localhost/sdcsearch";
// var mongoUri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/sdcsearch`;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongoose connection error'));
db.once('open', () => {
  console.log('successfully connected to mongoDb')
  // console.log(db);
})

module.exports = db;