const { reviews } = require('../db');

module.exports = {

  sort: () => {
    const orderBy = sort === 'newest' ? 'r.date' : sort === 'helpful' ? 'r.helpfulness': 'r.helpfulness';
    const queryString = `
    SELECT r.*, JSON_agg(photos.url) as photos
      FROM reviews r JOIN products p on r.product_id = p.id
      LEFT OUTER JOIN photos on r.id = photos.review_id
      WHERE p.id = ${product_id}
      GROUP by r.id
      ORDER BY ${orderBy} DESC
      LIMIT ${count}
      ;`;
    reviews.query(queryString)
    .then(result => cb(null, res))
    .catch(err => cb(err))
  }

}