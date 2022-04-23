const pool = require('../db');

module.exports = {

  update: (reviewID, cb) => {

    const queryString = `
      UPDATE reviews
      SET reported = TRUE
      WHERE id = ${reviewID}
    `
    pool.query(queryString, (err, result) => {
      if (err) {
        cb(err)
      } else {
        cb('updated reported')
      }
    })
  }
}