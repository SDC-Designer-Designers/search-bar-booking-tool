const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const BookingDate = require('../../dbhelpers/mongo/BookingDate.js');
const Listing = require('../../dbhelpers/mongo/Listing.js');
// const mongoose = require('mongoose');
const db = require('../../dbhelpers/mongo/connection.js'); // this is required to open the connection to mongo!!

const app = express();
const port = 3002;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../../client/dist')));

app.get('/dates/:id', (req, res) => {
  const id = parseInt(req.params.id);
  // var query = BookingDate.find({ID: id}).limit(1)
  var query = BookingDate.find({LISTING_ID: id})
  query.exec()
    .then(results => {
      console.log(req.params.id);
      res.status(200).send(results)
    })
    .catch(err => res.status(404).send(err));
});

// get by location
// app.get('/listings/search', (req, res) => {
//   let results = [];
//   Listing.findAll({limit: 10, where: {title: {[Op.like]: '%' + req.query.query + '%'}}}).then(assets => {
//     results.push(assets);
//     Listing.findAll({limit: 10, where: {city: {[Op.like]: '%' + req.query.query + '%'}}}).then(newAssets => {
//       results.push(newAssets.slice(0, 10 - results.length));
//       Listing.findAll({limit: 10, where: {state: {[Op.like]: '%' + req.query.query + '%'}}}).then(titleAssets => {
//         results.push(titleAssets);
//         res.status(200).send(results[0].concat(results[1].concat(results[2])));
//       }).catch(err => res.status(404).send(err));
//     }).catch(err => res.status(404).send(err));
//   }).catch(err => res.status(404).send(err));
// });

// app.get('/mlistings/:id', (req, res) => {
//   Listing.findAll({where: {id: req.params.id}})
//     .then(results => {
//       res.status(200).send(results);
//     })
//     .catch(err => res.status(404).send(err));
// });

// app.post('/mlistings', (req, res) => {
//   Listing.create(
//     {
//       title: req.body.title,
//       venue_type: req.body.venue_type,
//       bedrooms: req.body.bedrooms,
//       bathrooms: req.body.bathrooms,
//       sleep_capacity: req.body.sleep_capacity,
//       square_feet: req.body.square_feet,
//       review_overview: req.body.sleep_capacity,
//       rating: req.body.rating,
//       review_number: req.body.review_number,
//       owner: req.body.owner,
//       cleaning_fee: req.body.cleaning_fee,
//       state: req.body.state,
//       city: req.body.city,
//       pic: req.body.pic
//     }
//   )
//   .then((results) => {
//     res.status(202).send(results)
//   })
//   .catch((err) => {
//     console.error(err)
//   })
// });

// app.put('/mlistings/:id', (req, res) => {
//   Listing.update(
//     {
//       title: req.body.title,
//       venue_type: req.body.venue_type,
//       bedrooms: req.body.bedrooms,
//       bathrooms: req.body.bathrooms,
//       sleep_capacity: req.body.sleep_capacity,
//       square_feet: req.body.square_feet,
//       review_overview: req.body.sleep_capacity,
//       rating: req.body.rating,
//       review_number: req.body.review_number,
//       owner: req.body.owner,
//       cleaning_fee: req.body.cleaning_fee,
//       state: req.body.state,
//       city: req.body.city,
//       pic: req.body.pic
//     },
//     {where: {id: req.params.id}}
//   )
//   .then((results) => {
//     res.status(202).send(results)
//   })
//   .catch((err) => {
//     console.error(err)
//   })
// });

app.delete('/mlistings/:id', (req, res) => {
  Listing.deleteOne({id: req.params.id})
  .then((results) => {
    res.status(204).end()
  })
  .catch((err) => {
    console.error(err)
  })
});

app.listen(port, () => {
  console.log('Mongo App is listening on port', port);
});