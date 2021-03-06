const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const BookingDate = require('../../dbhelpers/mongo/BookingDate.js');
const Listing = require('../../dbhelpers/mongo/Listing.js');
const db = require('../../dbhelpers/mongo/connection.js'); // this is required to open the connection to mongo!!
const redis = require('redis');
const promise = require('bluebird');

promise.config({
  longStackTraces: true
});

promise.promisifyAll(redis.RedisClient.prototype);
promise.promisifyAll(redis.Multi.prototype);

const app = express();
const port = 3002;

const client = redis.createClient(6379, '127.0.0.1');

client.on('connect', () => {
  console.log('connected to redis');
});
client.on('error', (err) => {
  console.error(`redis error: ${err}`)
})

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

/* ----- STANDARD SEARCH QUERY ----- */
// app.get('/listings/search', async (req, res) => {
//   let results = [];
//   await Listing.find({title: { $regex: req.query.query, $options: 'i' }}).limit(10).lean()
//     .then((titles) => {
//       results.push(titles)
//       Listing.find({city: { $regex: req.query.query, $options: 'i' }}).limit(10).lean()
//         .then((cities) => {
//           results.push(cities.slice(0, 10 - results.length))
//           Listing.find({state: { $regex: req.query.query, $options: 'i' }}).limit(10).lean()
//             .then((states) => {
//               results.push(states)
//               res.status(200).send(results[0].concat(results[1].concat(results[2])));
//             })
//             .catch((err) => {
//               console.log('error at states')
//               res.status(404).send(err)
//             });
//         })
//         .catch((err) => {
//           console.log('error at cities')
//           res.status(404).send(err)
//         });
//     })
//     .catch((err) => {
//       console.log('error at titles')
//       res.status(404).send(err)
//     });
// });

/* ----- SEARCH -> CITY -> STATE -> TITLE W/ REDIS ----- */
app.get('/listings/search', async (req, res) => {
  let results = [];
  console.log(req.query.query)
  client.get(`listing:${req.query.query}`, async (err, redisResults) => {
    if (redisResults) {
      console.log('got from redis')
      const resultJSON = JSON.parse(redisResults);
      res.status(200).send(resultJSON);
    } else {
      await Listing.find({city: { $regex: req.query.query, $options: 'i' }}).limit(10).lean()
        .then((cities) => {
          results.push(cities)
          Listing.find({state: { $regex: req.query.query, $options: 'i' }}).limit(10).lean()
            .then((states) => {
              results.push(states.slice(0, 10 - results.length))
              Listing.find({title: { $regex: req.query.query, $options: 'i' }}).limit(10).lean()
                .then((titles) => {
                  results.push(titles)
                  client.setex(`listing:${req.query.query}`, 3600, JSON.stringify(results[0].concat(results[1].concat(results[2]))));
                  res.status(200).send(results[0].concat(results[1].concat(results[2])));
                })
                .catch((err) => {
                  console.log('error at titles')
                  res.status(404).send(err)
                });
            })
            .catch((err) => {
              console.log('error at states')
              res.status(404).send(err)
            });
        })
        .catch((err) => {
          console.error('error at cities', err)
          res.status(404).send(err)
        });
    }
  })
});

/* ----- SEARCH CITY -> STATE -> TITLE W/O REDIS ----- */
// app.get('/listings/search', async (req, res) => {
//   let results = [];
//   await Listing.find({city: { $regex: req.query.query, $options: 'i' }}).limit(10).lean()
//     .then((cities) => {
//       results.push(cities)
//       Listing.find({state: { $regex: req.query.query, $options: 'i' }}).limit(10).lean()
//         .then((states) => {
//           results.push(states.slice(0, 10 - results.length))
//           Listing.find({title: { $regex: req.query.query, $options: 'i' }}).limit(10).lean()
//             .then((titles) => {
//               results.push(titles)
//               // client.setex(`listing:${req.query.query}`, 3600, JSON.stringify(results[0].concat(results[1].concat(results[2]))));
//               res.status(200).send(results[0].concat(results[1].concat(results[2])));
//             })
//             .catch((err) => {
//               console.log('error at titles')
//               res.status(404).send(err)
//             });
//         })
//         .catch((err) => {
//           console.log('error at states')
//           res.status(404).send(err)
//         });
//     })
//     .catch((err) => {
//       console.log('error at cities')
//       res.status(404).send(err)
//     });
// });

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