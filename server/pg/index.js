const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const pool = require('./pool.js'); // pg database connection

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../../client/dist')));

app.get('/dates/:id', (req, res) => {
  const id = parseInt(req.params.id);
  pool.query('SELECT * FROM bookingdate WHERE id = $1', [id], (err, results) => {
    if (err) {
      res.status(404).send(err)
    }
    res.status(200).send(results.rows)
    // res.status(200).json(res.rows)
  })
})

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

// EXTREMEMLY SLOW!!!!!!!
app.get('/mlistings/:id', (req, res) => {
  const id = parseInt(req.params.id);
  pool.query('SELECT * FROM listing WHERE id = $1', [id], (err, results) => {
    if (err) {
      res.status(404).send(err)
    }
    res.status(200).send(results.rows)
    // res.status(200).json(res.rows)
  })
})

app.post('/mlistings', (req, res) => {

  const { title, venue_type, bedrooms, bathrooms, sleep_capacity, square_feet, review_overview, rating, review_number, owner, cleaning_fee, state, city, pic } = req.body;

  pool.query('INSERT INTO listing (title, venue_type, bedrooms, bathrooms, sleep_capacity, square_feet, review_overview, rating, review_number, owner, cleaning_fee, state, city, pic) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *;', [title, venue_type, bedrooms, bathrooms, sleep_capacity, square_feet, review_overview, rating, review_number, owner, cleaning_fee, state, city, pic], (err, results) => {
    if (err) {
      res.status(404).send(err)
    }
    res.status(200).send(results.rows)
  })
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
    {where: {id: req.params.id}}
  )
  .then((results) => {
    res.status(202).send(results)
  })
  .catch((err) => {
    console.error(err)
  })
});

app.delete('/mlistings/:id', (req, res) => {
  Listing.destroy({where: {id: req.params.id}})
  .then((results) => {
    res.status(204).end()
  })
  .catch((err) => {
    console.error(err)
  })
});

app.listen(port, () => {
  console.log('PG App is listening on port', port);
});