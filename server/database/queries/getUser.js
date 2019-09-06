// Write a query to get the user and their password from the database
const dbConnection = require('../config/connection');

const getUser = (email) => dbConnection.query({ text: 'SELECT password FROM "user" WHERE email=$1', values: [email] });

module.exports = {
  getUser,
};