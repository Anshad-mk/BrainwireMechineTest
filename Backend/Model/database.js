const sqlite3 = require('sqlite3').verbose();
// sqlite3 setup
const dbPath = '../DataBase/users.db'; // Replace with the actual path to your SQLite database file
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    // Create the users table if it doesn't exist
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        first_name TEXT,
        last_name TEXT,
        dob TEXT,
        address TEXT
      )
    `, (err) => {
      if (err) {
        console.error('Error creating table:', err.message);
      } else {
        console.log('Users table created');
      }
    });
  }
});

module.exports = db;