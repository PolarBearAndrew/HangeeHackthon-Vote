
var mongojs = require('mongojs'),
  db = mongojs('mongodb://127.0.0.1:27017/hackthonVote'),
  projects = db.collection('projects')

module.exports = {
  projects : projects,
};