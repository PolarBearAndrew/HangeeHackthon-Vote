var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('results', {
		title: '我是統計圖'
	});
});

module.exports = router;
