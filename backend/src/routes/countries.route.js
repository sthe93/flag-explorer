const express = require('express');

const router = express.Router();
const countriesController = require('../controllers/countries.controller');

router.get('/', countriesController.getAllCountries);
router.get('/:name', countriesController.getCountryByName);

module.exports = router;
