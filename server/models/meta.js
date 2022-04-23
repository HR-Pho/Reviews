const pool = require('../db');

module.exports = {
  getMeta: (productId, cb) => {
    const queryString = `

    SELECT reviews.rating AS rating,
    count(reviews.rating) AS total
    FROM reviews
    WHERE product_id = 65660
    GROUP BY rating;

    SELECT reviews.recommend AS recommended,
    count(reviews.recommend) AS total
    FROM reviews
    WHERE product_id = 65660
    GROUP BY recommended;

    ;


    `;
    pool.query(queryString, (err, result) => {
      if (err) {
        cb(err)
      } else {
        cb('updated reported')
      }
    })
  }
}