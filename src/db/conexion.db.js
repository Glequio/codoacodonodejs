const mysql = require('mysql2/promise');

const {
  dbhost,
  dbuser,
  dbpassword,
  dbport,
  dbdatabaseName
} = require('./db.js');




const pool = mysql.createPool({
  host: dbhost,
  user: dbuser,
  password: dbpassword,
  port: dbport,
  database: dbdatabaseName,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;