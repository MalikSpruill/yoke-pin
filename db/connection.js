const mysql = require("mysql2");
const pCode = require("../pcode"); //delete and place in password for mysql account if forked from github

// Used to connect to mysql created database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: pCode,
      database: 'yoke_block'
    },
    console.log('Connected to the yoke_block database.')
  );

module.exports = db;