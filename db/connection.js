const mysql = require("mysql2");

// Used to connect to mysql created database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 
    },
    console.log('Connected to the yoke_block database.')
  );

module.exports = db;