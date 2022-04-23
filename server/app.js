const express = require('express');
const pg = require('pg');
// const model = require('./models');
const reviews = require('./models/reviews.js');
const app = express();
const port = 3000;
app.use(express.json());


app.get('/reviews', function (req, res) {
  // model.getReviews();
  //4.22 Note - not sure if this works yet
  reviews.getAll()
  .then(res => {console.log('SUCCESSFUL GET REVIEWS',
  res.send('Hello World'))})
  .catch(err => {console.log(err)})
  // console.log();

})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
