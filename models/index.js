
var mongoose = require('mongoose').connect('mongodb://127.0.0.1:27017/hackthonVote'),
  db = mongoose.connection;

/*
 *  Model Project
 */
var Project = new mongoose.Schema({
	groupID : { type: String },
	groupName : { type: String },
	projectName : { type: String },
	projectID : { type: String },
	github : { type: String },
	vote : { type: String }
});

var porjectModel = db.model('projects', Project);

/*
 *  Model VoteLog
 */
var Vote = new mongoose.Schema({
	userID : { type: String },
	projectID : { type: String },
	voteTime : { type: Date }
});

var voteLogtModel = db.model('voteLog', Vote);

/*
 *
 */
module.exports = {
  Project : porjectModel,
	Vote : voteLogtModel
};