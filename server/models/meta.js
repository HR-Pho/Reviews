const pool = require('../db');

module.exports = {
  getMeta: (productId, cb) => {
    const queryString = `
    SELECT 


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