
var mongoose = require('mongoose').connect('mongodb://127.0.0.1:27017/hackthonVote'),
  db = mongoose.connection;


/*
 *  Schema of Group
 */
var Group = new mongoose.Schema({
	name : { type: String },
	members : [],
	projectName: { type: String },
	projectDetail : { type: String },
	createDate : { type: Date },
	github: { type: String },
	vote: { type: Number }
});


/*
 *  Schema of VoteLog
 */
var Vote = new mongoose.Schema({
	userID : { type: String },
	projectID : { type: String },
	voteTime : { type: Date }
});


//exports model
module.exports = {
  Project : db.model('group', Group),
	Vote : db.model('voteLog', Vote)
};