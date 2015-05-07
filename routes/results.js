var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('results', {
		title: '我是統計圖'
	});
});

module.exports = router;
