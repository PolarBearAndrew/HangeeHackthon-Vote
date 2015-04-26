var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function (req, res, next) {
	models.projects.insert({
		teamName: '洗洗睡',
		projectNmae : '吃飽睡'
	}, function (err, result) {

		if (err) {
			console.log(err);
			return res.send(err);
		}
		console.log(result);
	})
	
	res.render('index', {
		title: 'Express'
	});
});

module.exports = router;