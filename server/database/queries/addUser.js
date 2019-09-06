// Write a query to add the user and their password to the database
const connection = require('../config/connection');

exports.addUser = (email, password) => connection.query({
  text: 'INSERT INTO "user"(email,password) VALUES($1,$2)',
  values: [email, password]
})