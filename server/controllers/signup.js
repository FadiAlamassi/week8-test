const { join } = require('path');
const bcrypt = require('bcrypt');
const { addUser } = require('../database/queries/addUser');

exports.renderSignup = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'signup.html'));
};

exports.postSignup = (req, res) => {
  console.log(req.body);
  bcrypt.genSalt(10)
    .then(salt => bcrypt.hash(req.body.password, salt))
    .then(hashed => addUser(req.body.email, hashed))
    .then(() => res.redirect('/login'))
    .catch(err => res.status(400).send(err))
};