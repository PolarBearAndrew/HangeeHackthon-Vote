
var mongoose = require('mongoose').connect('mongodb://127.0.0.1:27017/hackthonVote'),
  db = mongoose.connection;

/*
 *  Schema of Project
 */
var Project = new mongoose.Schema({
	groupID : { type: String },
	groupName : { type: String },
	projectName : { type: String },
	projectID : { type: String },
	github : { type: String },
	vote : { type: Number }
});

/*
 *  Schema of VoteLog
 */
var Vote = new mongoose.Schema({
	userID : { type: String },
	projectID : { type: String },
	voteTime : { type: Date }
});

/*
 * exports model
 */
module.exports = {
  Project : db.model('projects', Project),
	Vote : db.model('voteLog', Vote)
};