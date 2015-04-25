
var mongojs = require('mongojs'),
  db = mongojs('mongodb://127.0.0.1:27017/hackthonVote'),
  test = db.collection('test')

module.exports = {
  test: test
};