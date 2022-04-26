const pool = require('../db');

module.exports = {

  addOne: (productId, rating, summary, body, recommend, name, email, cb) => {
    const queryString = `
        INSERT INTO reviews (product_id, rating, date, summary, body, recommend, reported, reviewer_name, reviewer_email, helpfulness)
        VALUES (${productId}, ${rating}, DEFAULT, ${summary}, ${body}, ${recommend}, DEFAULT, ${name}, ${email}, 0) RETURNING id
      `

    pool.query(queryString, (err, result) => {
      if (err) {
        cb(console.error('Error executing query', err))
      } else {
        // console.log(result);
        cb('Created')
      }
    })
  }
}

// const queryString = `
// WITH newid AS (
//   INSERT INTO reviews (id, product_id, rating, date, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness)
//   VALUES (DEFAULT, ${productId}, ${rating}, ${summary}, ${body}, ${recommend}, ${name}, ${email}) RETURNING id),

//   newPhoto AS (
//   INSERT INTO reviews_photos (id, review_id, url)
//   VALUES(DEFAULT, newid, ${photos})),

//   newCharacteristics AS (
//   INSERT INTO reviews_characteristics (id, characteristic_id, review_id, value)
//   VALUES(DEFAULT, ${characteristics.id}, newid, ${characteristics.value}))

//   SELECT * FROM reviews WHERE id = newid;
// `


// EXPLAIN ANALYZE INSERT INTO reviews (product_id, rating, date, summary, body, recommend, reported, reviewer_name, reviewer_email, helpfulness)
//         VALUES (65661, 5, DEFAULT, 'Ut dolore odio beatae ut laborum.', 'Reiciendis consequatur doloribus rem maiores maxime cum. Velit eum ut explicabo quas consequatur sed quo. Magni pariatur inventore consequatur quia saepe reprehenderit tempora voluptas. Et natus maiores facilis illo voluptatem voluptatibus nihil. Beatae non dolor sint qui. Deserunt blanditiis corporis delectus sit possimus.', true, DEFAULT, 'Cassandra', 'cassandra@gmail.com', 0) RETURNING id;
