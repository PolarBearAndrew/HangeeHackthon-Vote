var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function (req, res, next) {

	models.Team.find( {}, function (err, result) {

		console.log('###test', result[0].name)

	    if (err) {
	      console.log('[GET] the teams info FAIL, err ->', err);

	    } else {
	    	//data: ['', '', '', '', '', '', '', '', '', ''],
		    res.render('index', {
				title: 'Hackathon 6th Vote',
				data: result,
		    	path: req.route
			});
	      	console.log('[GET] the teams info success', result);
	    }

	  });

});

module.exports = router;