const { reviews } = require('../db');

module.exports = {
  getMeta: (cb) => {
    const queryString = ``;
    reviews.query(queryString)
    .then(result => cb(null, res))
    .catch(err => cb(err))
  }

}