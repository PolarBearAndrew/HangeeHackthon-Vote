var express = require('express');
var router = express.Router();
var models = require('../models');

/* ====================================
 *  TEST api
 * 
 * 
 * [GET] test create team
 */
router.get('/create/test', function (req, res, next) {
	
  //new entity
  var project = new models.Project({
    name: 'WashWashSeelp',
    imgURL: 'testImg.jpg',
		projectName: 'hackthon vote',
		projectDetail : 'For hackthon Vote ',
		createDate : Date.now(),
		github: 'https://github.com/hey-hackthon/HangeeHackthon-Vote',
		vote: 12,
		members :[
			{ id : 'A001', name : 'Webber', phone : '0901000000' },
			{ id : 'A002', name : 'Bejamin', phone : '0902000000' },
			{ id : 'A003', name : 'Simon', phone : '0903000000' },
			{ id : 'A004', name : 'Dca', phone : '0904000000' },
			{ id : 'A005', name : 'Vincent', phone : '0905000000' },
			{ id : 'A006', name : 'Andrew', phone : '0906000000' }
		]
  });

  //save it
  project.save(function (err, result) {
    if (err) {
      console.log('[TEST] create group FAIL, err ->', err);
			
    } else {
			res.json( result );
      console.log('[TEST] create group success, result ->', result);
    }
  });
  
});


/* ====================================
 * NEW
 * 
 * 
 * [POST] create a team
 */

router.post('/create/test', function (req, res, next) {
	
	var team = req.body.team;
	
	team.createDate = Date.now();
	team.vote = 0;
	
	//add this info to DB
	
  var project = new models.Project(team);

  project.save(function (err, result) {
    if (err) {
      console.log('[POST] create group FAIL, err ->', err);
			
    } else {
			res.json( {
					success : true,
					result : result
			});
      console.log('[POST] create group success, result ->', result);
    }
  });
  
});



/* ==================================== 
 * SEARCH
 * 
 * 
 * [GET] get all teams & team's project info
 */


/* 
 * [GET] get the teams & team's project info, with id
 */


/* ==================================== 
 * MODIFY
 * 
 * 
 * [PUT] modify group & porject info, with id
 */


/* 
 * [PUT] vote, with id
 */


/* 
 * [PUT] vote, with id
 */

/* ==================================== 
 * DELETE
 * 
 * 
 * [DELETE]
 */


/*
 * api
 */

/*
 * api get project all
 */
router.get('/project/getAll', function (req, res, next) {
  //new entity
  models.Project.find({}, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});


/*
 * api get project with _id
 */
router.get('/project/get/:id', function (req, res, next) {

  var query = {
    _id: req.params.id
  };

  //new entity
  models.Project.find(query, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log('[GET] project list', result);
      res.json(data);
    }
  });
});

/*
 * api add a new project
 */
router.post('/api/project/new', function (req, res, next) {
  //new entity
  var project = new models.Project({
    groupID: '001',
    groupName: '測試 洗洗睡 測試',
    projectName: 'hackthon vote',
    projectID: '999',
    github: 'https://github.com/hey-hackthon/HangeeHackthon-Vote',
    vote: 0,
  });


  //save it
  project.save(function (err, result) {
    if (err) {
      console.log(err);
      res.json({ err: err });
      
    } else {
      console.log('[POST] project new', result);
      res.json({ data: result });
    }
  });
});

/*
 * api vote +1
 */
router.put('/project/updateVote/:id', function (req, res, next) {

  var query = { _id: req.params.id };
  
  models.Project.update(query, { $inc: { vote: 1 } }, function(err, result){
    if (err) {
      console.log(err);
      res.json({ err: err });
      
    } else {
      console.log('[PUT] vote ', result);
      res.json({ data: result });
    }
  });
});


/*
 * api get vote log all
 */
router.get('/api/voteLog/', function (req, res, next) {
  //new entity
  models.Vote.find({}, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});


/*
 * api vote log new
 */
router.post('/api/voteLog/add/:pid/:uid', function (req, res, next) {
  
  //new entity
  var vote = new models.Vote({
    userID: req.params.uid,
    projectID: req.params.pid,
    voteTime: Date.now()
  });


  //save it
  vote.save(function (err, result) {
    if (err) {
      console.log(err);
      res.json({ err: err });
      
    } else {
      console.log('[POST] voteLog new', result);
      res.json({ data: result });
    }
  });
});




module.exports = router;