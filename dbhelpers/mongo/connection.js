var mongoose = require('mongoose');
var userName = require('./creds').userName;
var passWord = require('./creds').passWord;
var dbip = require('./creds').dbip
// var mongoUri = "mongodb://localhost/sdcsearch";
// var mongoUri = `mongodb://${userName}:${passWord}@${dbip}:27017/sdcsearch`;
var mongoUri = `mongodb://hunter:keepitsecret@34.212.34.103/sdcsearch`

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