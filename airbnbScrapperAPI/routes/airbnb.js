
var express = require('express');
var router = express.Router();
var AirBnB = require('../controllers').airbnb;

router.post('/scrap-single-property', AirBnB.scrapSingleProperty);

module.exports = router;
