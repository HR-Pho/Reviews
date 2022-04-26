
require('dotenv').config();

const express = require('express');
const pg = require('pg');
// const model = require('./models');
const reviews = require('./models/reviews.js');
const post = require('./models/post.js');
const helpfulness = require('./models/putHelpfulness.js');
const reported = require('./models/putReported.js');
const app = express();
const port = 3000;
app.use(express.json());


app.get('/reviews', (req, res) => {
  const productId = req.query.product_id;
  const count = req.query.count || 5;
  const order = req.query.sort || 'relevant';
  const page = req.query.page || 1;

  reviews.getAll(page, productId, count, order, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log('SUCCESSFUL GET REVIEWS');
      res.send(result);
    }
  })
})

app.post('/reviews', (req, res) => {

  const product_id = req.query.product_id;
  const rating = req.query.rating;
  const summary = req.query.summary;
  const body = req.query.body;
  const recommend = req.query.recommend;
  const name = req.query.name;
  const email = req.query.email;
  const photos = req.query.photos;
  const characteristics = req.query.characteristics;

  post.addOne(product_id, rating, summary, body, recommend, name, email, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      console.log('SUCCESSFUL POST REVIEW');
      res.send('Created');
    }
  })
})


app.put('/reviews/:review_id/helpful', (req, res) => {
  const reviewID = req.params.review_id;
  console.log(reviewID);
  helpfulness.update(reviewID, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      console.log('SUCCESSFUL UPDATE ON HELPFULNESS');
      res.send(result);
    }
  })
})

app.put('/reviews/:review_id/report', (req, res) => {
  const reviewID = req.params.review_id;
  console.log(reviewID);
  reported.update(reviewID, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      console.log('SUCCESSFUL UPDATE ON REPORTED');
      res.send(result);
    }
  })
})


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
