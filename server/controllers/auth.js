const jwt = require('jsonwebtoken');
require('env2')('config.env');

exports.auth = (req, res, next) => {
  jwt.verify(req.cookies.login, process.env.SECRET, (err, decoded) => {
    if (err) res.redirect('/');
    else next();
  })

}