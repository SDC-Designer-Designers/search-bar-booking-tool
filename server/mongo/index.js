const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const BookingDate = require('../../dbhelpers/mongo/BookingDate.js');
const Listing = require('../../dbhelpers/mongo/Listing.js');
const db = require('../../dbhelpers/mongo/connection.js'); // this is required to open the connection to mongo!!
const loadertxt = require('../../loaderio.txt');

const app = express();
const port = 3002;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../../client/dist')));

app.get('/dates/:id', (req, res) => {
  const reqid = parseInt(req.params.id);
  var query = BookingDate.find({listing_id: reqid}).limit(10).lean()
  query.exec()
    .then(results => {
      res.status(200).send(results)
    })
    .catch(err => res.status(404).send(err));
});

app.get('/loaderio-1cb8b327c49d6e2c7f466562857acad8.txt', (req, res) => {
  if (err) {
    res.status(404).send(err);
  }
  res.status(200).send(loadertxt);
})

app.get('/listings/search', async (req, res) => {
  let results = [];
  await Listing.find({title: { $regex: req.query.query, $options: 'i' }}).limit(10).lean()
    .then((titles) => {
      results.push(titles)
      Listing.find({city: { $regex: req.query.query, $options: 'i' }}).limit(10).lean()
        .then((cities) => {
          results.push(cities.slice(0, 10 - results.length))
          Listing.find({state: { $regex: req.query.query, $options: 'i' }}).limit(10).lean()
            .then((states) => {
              results.push(states)
              res.status(200).send(results[0].concat(results[1].concat(results[2])));
            })
            .catch((err) => {
              console.log('error at states')
              res.status(404).send(err)
            });
        })
        .catch((err) => {
          console.log('error at cities')
          res.status(404).send(err)
        });
    })
    .catch((err) => {
      console.log('error at titles')
      res.status(404).send(err)
    });
});

app.get('/mlistings/:id', (req, res) => {
  const reqid = parseInt(req.params.id);
  Listing.find({id: reqid}).lean()
    .then(results => {
      res.status(200).send(results);
    })
    .catch(err => res.status(404).send(err));
});

app.post('/mlistings', (req, res) => {
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
    }
  )
  .then((results) => {
    res.status(202).send(results)
  })
  .catch((err) => {
    console.error(err)
  })
});

app.put('/mlistings/:id', (req, res) => {
  const reqid = parseInt(req.params.id);
  Listing.findOneAndUpdate(
    {
      id: reqid
    },
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
    {
      new: true
    }
  ).lean()
  .then((results) => {
    res.status(202).send(results)
  })
  .catch((err) => {
    console.error(err)
  })
});

app.delete('/mlistings/:id', (req, res) => {
  const reqid = parseInt(req.params.id);
  Listing.deleteOne({id: reqid}).lean()
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