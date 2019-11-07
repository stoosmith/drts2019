const knex = require('knex');

// config useful for heroku as you can access NODE_ENV
const config = require('../config/config').get(process.env.NODE_ENV);

//knex connection host can be auto based on ENV: process.env.PG_CONNECTION_STRING
//PORT is 5432
var db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'test',
      database : 'drtsdbv2'
    }
})

module.exports = db;