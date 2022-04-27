// const dotenv = require('dotenv');
const {host, database, user, password, port} = require('../../config.js');

// console.log(database);
const { Pool } = require('pg');

const pool = new Pool({
  host: '',
  database: 'postgres',
  user: 'postgres',
  password: '',
  port: 5432
});

// pool.connect();
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  // pool.end();
})

module.exports = pool;

