const express = require('express');

const error = require('./error');
const city = require('./city');
const { renderSignup, postSignup } = require('./signup');
const { renderLogin, postLogin } = require('./login');
const { auth } = require('./auth');

const router = express.Router();

router.get('/login', renderLogin);
router.get('/signup', renderSignup);
router.post('/login', postLogin)
router.post('/signup', postSignup)
router.get('/cities', city.renderCities);
router.get('/all-cities', city.getAllCities);
router.post('/add-city', city.add);
router.use(error.client);
router.use(error.server);

module.exports = router;
