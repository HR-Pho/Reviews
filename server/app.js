require('dotenv').config();

const express = require('express');
const pg = require('pg');
// const model = require('./models');
const reviews = require('./models/reviews.js');
const helpfulness = require('./models/putHelpfulness.js');
const reported = require('./models/putReported.js');
const app = express();
const port = 3000;
app.use(express.json());


app.get('/reviews', (req, res) => {
  const productId = 65660;
  const count = 10;
  const order = 'newest';
  // const product = {produc};

  reviews.getAll(productId, count, order, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log('SUCCESSFUL GET REVIEWS');
      res.send(result);
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
