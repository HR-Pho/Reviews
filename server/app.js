const express = require('express');
const pg = require('pg');
const model = require('./models');
const app = express();
const port = 3000;
app.use(express.json());


app.get('/reviews', function (req, res) {
  // model.getReviews();
  console.log(model.getReviews.getAll);
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
