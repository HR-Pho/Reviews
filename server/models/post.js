const pool = require('../db');

module.exports = {

  postOne: (productId, rating, summary, body, recommend, name, email, photos, characteristics, cb) => {
    const queryString = `
      INSERT INTO reviews (product)
    `

    pool.query(queryString, (err, result) => {
      if (err) {
        cb(console.error('Error executing query', err))
      } else {
        cb(result.rows)
      }
    })
  }
}