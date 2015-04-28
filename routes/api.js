var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/project/create', function (req, res, next) {

  //new entity
  var project = new models.Project({
    groupID: '001',
    groupName: '測試 洗洗睡 測試',
    projectName: 'hackthon vote',
    projectID: '999',
    github: 'https://github.com/hey-hackthon/HangeeHackthon-Vote',
    vote: 12,
  });


  //save it
  project.save(function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log('save complete', result);
    }
  });

  res.json({yes:"刷新此頁面會新增一筆Project測試資料在db"});
});



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