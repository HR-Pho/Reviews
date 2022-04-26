// const dotenv = require('dotenv');
const {host, database, user, password, port} = require('../../config.js');

console.log(database);
const { Pool } = require('pg');

const pool = new Pool({
  host: host,
  database: "postgres",
  user: user,
  password: password,
  port: port
});


// pool.connect((err, client, release) => {
//   if (err) {
//     return console.error('Error acquiring client', err.stack)
//   }
//   client.query('SELECT NOW()', (err, result) => {
//     release()
//     if (err) {
//       return console.error('Error executing query', err.stack)
//     }
//     console.log(result.rows);
//   })
// })

// pool.connect();
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  // pool.end();
})

module.exports = pool;

