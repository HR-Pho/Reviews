const pool = require('../db');

// module.exports = {
  //add page later
  const getAll = (productId, count, order) => {

    const sort =
    order ==='helpful' ? ' ORBER BY reviews.helpfulness DESC' :
    order === 'newest' ? 'ORDER BY reviews.date DESC' :
    'ORDER BY reviews.helpfulness DESC, reviews.date DESC'

    const queryString = `
    SELECT reviews.id AS review_id, reviews.rating, reviews.summary, reviews.recommend, reviews.response, reviews.body, reviews.date, reviews.reviewer_name, reviews.helpfulness,
      (array(
        SELECT row_to_json(t)
        FROM (
        SELECT reviews_photos.id, reviews_photos.url AS url
        FROM reviews_photos
        INNER JOIN reviews
        ON reviews.id = reviews_photos.review_id
        WHERE reviews.product_id = ${productId}
      ) t
      ))
    AS photos
    FROM reviews
    WHERE reviews.product_id = ${productId}
    AND reviews.reported = FALSE
    ${sort}
    LIMIT ${count}`

  //   const queryString = `SELECT row_to_json(t)
  //   FROM (
  //   SELECT reviews_photos.id, reviews_photos.url AS url
  //   FROM reviews_photos
  //   INNER JOIN reviews
  //   ON reviews.id = reviews_photos.review_id
  //   WHERE reviews.product_id = 65660
  // ) t`

    pool.query(queryString, (err, result) => {
      if (err) {
        return console.error('Error executing query', err)
      } else {
        console.log(result.rows);
      }
    })
  }

  getAll(65660, 5, 'newest');
// }
