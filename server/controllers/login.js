const { join } = require('path');
const { getUser } = require('../database/queries/getUser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('env2')('config.env');

exports.renderLogin = (req, res, next) => {
  if (!req.cookies.login) {
    res.sendFile(join(__dirname, '..', '..', 'public', 'login.html'));
  } else { res.redirect('/cities') }
}

exports.postLogin = (req, res) => {
  getUser(req.body.email)
    .then(passwordRows => passwordRows.rows[0].password)
    .then(password => bcrypt.compare(req.body.password, password))
    .then(isEqual => {
      if (isEqual) {
        const token = jwt.sign({ email: req.body.email }, process.env.SECRET);
        res.cookie('login', token);
        res.redirect('/cities');
      }
      else {
        res.send('Email or Password incorrect');
      }
    })
    .catch(err => next(err.message));
};