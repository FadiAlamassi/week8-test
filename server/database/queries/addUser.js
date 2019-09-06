// Write a query to add the user and their password to the database
// Write a query to add the user and their password to the database
const connection = require('../config/connection');

exports.addUser = (email, password) => {
  const sql = {
    text: 'INSERT INTO user(email,password) VALUES($1,$2)',
    valules: [email, password]
  }
  return connection.query(sql);
}