var mongoose = require('mongoose');
var mongoUri = "mongodb://localhost/sdcsearch";

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongoose connection error'));
db.once('open', () => {
  console.log('successfully connected to mongo')
  // console.log(db);
})

module.exports = db;