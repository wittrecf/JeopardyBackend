var MongoClient = require('mongodb').MongoClient
  , assert = require('assert'),
    mongo = require('./mongo');

var url = 'mongodb://localhost:27017/myproject';

exports.getData = function(req, res){
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        mongo.getData(db, req, res, function() {
            db.close();
        });
    });
}