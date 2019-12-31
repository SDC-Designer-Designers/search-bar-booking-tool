// jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const BookingDate = require('../dbhelpers/mySQL/models').BookingDate;
const Listing = require('../dbhelpers/mySQL/models').Listing;
const path = require('path');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/dates/:id', (req, res) => {
  // console.log(req.params);
  BookingDate.findAll({where: {listing_id: req.params.id}})
    .then(results => res.status(200).send(results))
    .catch(err => res.status(404).send(err));
});

// app.put('/dates/check_in/:id', (req, res) => {
//   BookingDate.update({check_in: false, available: true}, {where: {check_in: true, listing_id: req.params.id}})
//     .then(() => {
//       BookingDate.update({check_in: true, available: false}, {where: {date: req.body.date, listing_id: req.params.id}})
//         .then(() => res.status(200).send(results))
//         .catch(err => res.status(404).send(err));
//     });
// });

// app.put('/dates/check_out/:id', (req, res) => {
//   BookingDate.update({check_out: false, available: true}, {where: {check_out: true, listing_id: req.params.id}})
//     .then(() => {
//       BookingDate.update({check_out: true, available: false}, {where: {date: req.body.date, listing_id: req.params.id}})
//         .then(() => res.status(200).send(results))
//         .catch(err => res.status(404).send(err));
//     });
// });

// get by location
app.get('/listings/search', (req, res) => {
  let results = [];
  Listing.findAll({limit: 10, where: {title: {[Op.like]: '%' + req.query.query + '%'}}}).then(assets => {
    results.push(assets);
    Listing.findAll({limit: 10, where: {city: {[Op.like]: '%' + req.query.query + '%'}}}).then(newAssets => {
      results.push(newAssets.slice(0, 10 - results.length));
      Listing.findAll({limit: 10, where: {state: {[Op.like]: '%' + req.query.query + '%'}}}).then(titleAssets => {
        results.push(titleAssets);
        res.status(200).send(results[0].concat(results[1].concat(results[2])));
      }).catch(err => res.status(404).send(err));
    }).catch(err => res.status(404).send(err));
  }).catch(err => res.status(404).send(err));
});

app.get('/mlistings/:id', (req, res) => {
  Listing.findAll({where: {id: req.params.id}})
    .then(results => {
      res.status(200).send(results);
    })
    .catch(err => res.status(404).send(err));
});

app.put('/mlistings/:id', (req, res) => {
  Listing.update(
    {
      title: req.body.title,
      venue_type: req.body.venue_type,
      bedrooms: req.body.bedrooms,
      bathrooms: req.body.bathrooms,
      sleep_capacity: req.body.sleep_capacity,
      square_feet: req.body.square_feet,
      review_overview: req.body.sleep_capacity,
      rating: req.body.rating,
      review_number: req.body.review_number,
      owner: req.body.owner,
      cleaning_fee: req.body.cleaning_fee,
      state: req.body.state,
      city: req.body.city,
      pic: req.body.pic
    },
    {where: {listing_id: req.params.id}}
  )
  .then((results) => {
    res.status(202).send(results)
    console.log('hit put route');
  })
  .catch((err) => {
    console.error(err)
  })
});

app.post('/mlistings/:id', (req, res) => {
  Listing.create(
    {
      title: req.body.title,
      venue_type: req.body.venue_type,
      bedrooms: req.body.bedrooms,
      bathrooms: req.body.bathrooms,
      sleep_capacity: req.body.sleep_capacity,
      square_feet: req.body.square_feet,
      review_overview: req.body.sleep_capacity,
      rating: req.body.rating,
      review_number: req.body.review_number,
      owner: req.body.owner,
      cleaning_fee: req.body.cleaning_fee,
      state: req.body.state,
      city: req.body.city,
      pic: req.body.pic
    },
    {where: {listing_id: req.params.id}}
  )
  .then((results) => {
    res.status(202).send(results)
    console.log('hit put route');
  })
  .catch((err) => {
    console.error(err)
  })
});

app.delete('/mlistings/:id', (req, res) => {
  Listing.delete({where: {listing_id: req.params.id}})
});

// app.get('/listings/search/:id', (req, res) => {
//   BookingDate.findAll({where: {date: req.body.check_in_date, available: true, listing_id: req.params.id}})
//     .then(results => {
//       if (results.length) {
//         BookingDate.findAll({where: {date: req.body.check_out_date, available: true, listing_id: req.params.id}})
//           .then(results1 => {
//             if (results1.length) {
//               Listings.findAll({limit: 10, where: {title: {$like: '%' + req.body.query + '%'}, }})
//               .then(results => res.status(200).send(results)).catch(err => res.status(404).send(err));
//             } else {
//               res.status(404).send('No listings found for these dates');
//             }
//           });
//       } else {
//         res.status(404).send('No listings found for these dates');
//       }
//     });
// });

app.listen(port, () => {
  console.log('App is listening on port', port);
});
