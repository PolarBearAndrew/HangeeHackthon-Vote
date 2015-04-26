var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function (req, res, next) {
	
	//new entity
	var project  = new models.Project({
		groupID : '001',
		groupName : '測試 洗洗睡 測試',
		projectName : 'hackthon vote',
		projectID : '999',
		github : 'https://github.com/hey-hackthon/HangeeHackthon-Vote',
		vote : 12,
	});
	
	
	//save it
	project.save(function (err, result) {
		if (err) {
			console.log(err);
		} else {
			console.log('save complete', result);
		}
	});

	res.render('index', {
		title: '刷新此頁面會新增一筆測試資料在db'
	});
});

module.exports = router;