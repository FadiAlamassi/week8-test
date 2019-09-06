const express = require('express');

const error = require('./error');
const city = require('./city');
const { renderSignup, postSignup } = require('./signup');
const { renderLogin, postLogin } = require('./login');
const { auth } = require('./auth');
const { logout } = require('./logout')

const router = express.Router();

router.get('/login', renderLogin);
router.get('/signup', renderSignup);
router.post('/login', postLogin)
router.post('/signup', postSignup)
router.use(auth);
router.get('/cities', city.renderCities);
router.get('/all-cities', city.getAllCities);
router.post('/add-city', city.add);
router.get('/logout', logout);
router.use(error.client);
router.use(error.server);

module.exports = router;
