var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(req.route)
	res.render('index', {
		title: 'Hackathon 6th Vote',
		data: ['', '', '', '', '', '', '', '', '', ''],
    	path: req.route
	});
});

module.exports = router;