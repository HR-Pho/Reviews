const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'minggui',
  password: 'Meow5000!',
  database: 'postgres',
  port: 5432,
});


pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  client.query('SELECT * FROM reviews LIMIT 5', (err, result) => {
    release()
    if (err) {
      return console.error('Error executing query', err.stack)
    }
    console.log(result.rows);
  })
})

module.exports = pool;

