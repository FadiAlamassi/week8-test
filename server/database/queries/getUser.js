// Write a query to get the user and their password from the database
const dbConnection = require('../config/connection');

const getUser = (email) => {
  return dbConnection.query(`SELECT password FROM user;`);
};

module.exports = {
  getUser,
};