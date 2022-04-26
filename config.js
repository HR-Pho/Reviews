const dotenv = require('dotenv').config();
// import dotenv from 'dotenv';
// dotenv.config({path:'/Users/minggui/Immersive/Reviews/.env'});

module.exports = {
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
};