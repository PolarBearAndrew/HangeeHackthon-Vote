var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(req.route)
	res.render('index', {
		title: '我是首頁',
    path: req.route
	});
});

module.exports = router;