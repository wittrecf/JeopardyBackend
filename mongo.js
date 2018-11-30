var assert = require('assert');

exports.getData = function(db, req, res, callback) {
    var collection = db.collection('documents');
    collection.find(req.query).toArray(function(err, docs) {
      assert.equal(err, null);
      res.send(docs);
      callback(docs);
    });      
  }