var mongoose = require('mongoose');
var mongoUri = "mongodb://localhost/sdcsearch";

mongoose.connect(mongoUri, {useNewUrlParser: true});

const db = mongoose.connection;

module.exports = db;