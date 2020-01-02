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
  pool.query('SELECT * FROM bookingdate WHERE listing_id = $1', [id], (err, results) => {
    if (err) {
      res.status(404).send(err)
    }
    res.status(200).send(results.rows)
    // res.status(200).json(res.rows)
  })
})

app.get('/listings/search', (req, res) => {
  let results = [];
  pool.query(`SELECT * FROM listing WHERE title LIKE '%${req.query.query}%' LIMIT 10;`, (err, titles) => {
    if (err) {
      // console.error(err)
      res.status(404).send(err)
    }
    results.push(titles.rows);
    pool.query(`SELECT * FROM listing WHERE city LIKE '%${req.query.query}%' LIMIT 10;`, (err, cities) => {
      if (err) {
        // console.error(err)
        res.status(404).send(err)
      }
      results.push(cities.rows.slice(0, 10 - results.length));
      pool.query(`SELECT * FROM listing WHERE state LIKE '%${req.query.query}%' LIMIT 10;`, (err, states) => {
        if (err) {
          // console.error(err)
          res.status(404).send(err)
        }
        results.push(states.rows);
        res.status(200).send(results[0].concat(results[1].concat(results[2])));
      })
    })
  })
});

// EXTREMEMLY SLOW!!!!!!!
app.get('/mlistings/:id', (req, res) => {
  const id = parseInt(req.params.id);
  pool.query('SELECT * FROM listing WHERE id = $1', [id], (err, results) => {
    if (err) {
      res.status(404).send(err)
    }
    res.status(200).send(results.rows)
  })
})

app.post('/mlistings', (req, res) => {

  const { title, venue_type, bedrooms, bathrooms, sleep_capacity, square_feet, review_overview, rating, review_number, owner, cleaning_fee, state, city, pic } = req.body;

  pool.query(
    'INSERT INTO listing (title, venue_type, bedrooms, bathrooms, sleep_capacity, square_feet, review_overview, rating, review_number, owner, cleaning_fee, state, city, pic) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *;',
    [title, venue_type, bedrooms, bathrooms, sleep_capacity, square_feet, review_overview, rating, review_number, owner, cleaning_fee, state, city, pic],
    (err, results) => {
      if (err) {
        res.status(404).send(err)
      }
      res.status(200).send(results.rows)
  })
});

app.put('/mlistings/:id', (req, res) => {

  const id = parseInt(req.params.id);

  const { title, venue_type, bedrooms, bathrooms, sleep_capacity, square_feet, review_overview, rating, review_number, owner, cleaning_fee, state, city, pic } = req.body;

  pool.query(
    'UPDATE listing SET title = $1, venue_type = $2, bedrooms = $3, bathrooms = $4, sleep_capacity = $5, square_feet = $6, review_overview = $7, rating = $8, review_number = $9, owner = $10, cleaning_fee = $11, state = $12, city = $13, pic = $14 WHERE id = $15 RETURNING *;',
    [title, venue_type, bedrooms, bathrooms, sleep_capacity, square_feet, review_overview, rating, review_number, owner, cleaning_fee, state, city, pic, id],
    (err, results) => {
      if (err) {
        res.status(404).send(err)
      }
      res.status(200).send(results.rows)
  })
});

app.delete('/mlistings/:id', (req, res) => {
  const id = parseInt(req.params.id);
  pool.query('DELETE FROM listing WHERE id = $1', [id], (err, results) => {
    if (err) {
      res.status(404).send(err)
    }
    res.status(200).send(results.rows)
  })
});

app.listen(port, () => {
  console.log('PG App is listening on port', port);
});