const { Pool } = require('pg')

// config useful for heroku as you can access NODE_ENV
const config = require('../config/config').get(process.env.NODE_ENV);

const pool = new Pool({
  user: 'postgres',
  host: config.DATABASE,
  database: 'drtsdbv2',
  password: 'test',
  post: 5432
})

module.exports = pool;