const { reviews } = require('../db');

module.exports = {
  getAll: () => {
    // const queryString = `
    // SELECT reviews.id AS review_id, reviews.rating, reviews.summary, reviews.recommend, reviews.response, reviews.body, reviews.date, reviews.reviewer_name, reviews.helpfulness,
    //   (array(
    //     SELECT row_to_json(t)
    //     FROM (
    //     SELECT photos.id, photo_url AS url
    //     FROM photos
    //     INNER JOIN reviews
    //     ON reviews.id = photos.review_id
    //     WHERE reviews.product_id = $1
    //   ) t
    //   ))
    // AS photos
    // FROM reviews
    // WHERE reviews.product_id = $1;`
    const queryString = `SELECT * FROM reviews LIMIT 5`

    reviews.query(queryString, (err, result) => {
      if (err) {
        return console.error('Error executing query', err.stack)
      }
      console.log(result);
    })
  }
}