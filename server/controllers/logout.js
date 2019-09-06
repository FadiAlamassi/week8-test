exports.logout = (req, res, next) => {
  res.clearCookie('login');
  res.redirect('/');
}