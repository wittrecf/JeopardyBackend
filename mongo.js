var assert = require('assert');

exports.getData = function(db, req, res, callback) {
    var collection = db.collection('documents');
    collection.find(req.query).toArray(function(err, docs) {
      assert.equal(err, null);
      res.send(docs);
      callback(docs);
    });      
  }

  exports.insertDocuments = function(db, callback) {
    var collection = db.collection('documents');
    collection.insertMany([
      {"category": "food", "score": "100", "answer": "The Hamburger originated in this country", "correct_question": "Germany", "question_type":"Where","incorrect_questions": ["United States", "Austria", "South Korea"]},
      {"category": "food", "score": "100", "answer": "The Trinidad Scorpion is a variety of this kind of edible plant", "correct_question": "Chili pepper", "question_type":"What","incorrect_questions": ["Cattail", "Chickweed", "Rumex acetosella"]},
      {"category": "food", "score": "100", "answer": "Margarine is used as a substitute for this ingredient", "correct_question": "Butter", "question_type":"What","incorrect_questions": ["Milk", "Eggs", "Flower"]},
      {"category": "food", "score": "200", "answer": "This 'king' of golf lent his name to a mixture of iced tea and lemonade", "correct_question": "Arnold Palmer", "question_type":"Who","incorrect_questions": ["Tiger Woods", "Phil Mickelson", "Jordan Spieth"]},
      {"category": "food", "score": "200", "answer": "A drink served 'on the rocks', is served with this", "correct_question": "Ice cubes", "question_type":"What","incorrect_questions": ["Sugar", "Salt", "Lemon"]},
      {"category": "food", "score": "200", "answer": "This ingredient is added to white sugar to make brown sugar", "correct_question": "Molasses", "question_type":"What","incorrect_questions": ["Sawdust", "Pine needles", "Straw"]},
      {"category": "food", "score": "300", "answer": "The poke bowl originated in this U.S. state", "correct_question": "Hawaii", "question_type":"Where","incorrect_questions": ["Virgina", "South Carolina", "Maine"]},
      {"category": "food", "score": "300", "answer": "Foie gras is a french delicacy made from the liver of this animal", "correct_question": "Goose", "question_type":"What","incorrect_questions": ["Cow", "Pig", "Chicken"]},
      {"category": "food", "score": "300", "answer": "A liquor that is 100 proof has this percentage of alcohol", "correct_question": "50%", "question_type":"What","incorrect_questions": ["10%", "20%", "40%"]},
      {"category": "food", "score": "400", "answer": "This notable brand of alcohol takes its name from the romanticized, storied life of a Welsh buccaneer who routed the Spanish in an attack on Panama City in 1671", "correct_question": "Captain Morgan", "question_type":"What","incorrect_questions": ["Don Julio", "Bacardi", "Tanqueray"]},
      {"category": "food", "score": "400", "answer": "A Moscow Mule is a type of cocktail popularly served in this", "correct_question": "Copper Mug", "question_type":"What","incorrect_questions": ["Bag", "Shoe", "Glass"]},
      {"category": "food", "score": "400", "answer": "Founded in 1921, this company was credited with being the first 'fast food' chain", "correct_question": "White Castle", "question_type":"What","incorrect_questions": ["Mcdonalds", "Chik-fil-a", "In-n-Out"]},
      {"category": "food", "score": "500", "answer": "The letters C and H stands for this in C & H Sugar", "correct_question": "California and Hawaii", "question_type":"What","incorrect_questions": ["Calvin and Hobbes", "Cosmic and Heliospheric", "Charleston and Hamburg"]},
      {"category": "food", "score": "500", "answer": "Jamón ibérico is a type of cured ham that is traditionally produced by these two neighboring countries", "correct_question": "Spain and Portugal", "question_type":"Where","incorrect_questions": ["Bolivia and Peru", "Brazil and Paraguay", "Argentina and Chile"]},
      {"category": "food", "score": "500", "answer": "Malbec, Sangiovese, and Syrah are all a type of this", "correct_question": "Wine", "question_type":"What","incorrect_questions": ["Cow", "Vegetable", "Chicken"]}
    ], function(err, result) {
      console.log("Inserted lots of documents into the collection");
      callback(result);
    });
  }

  exports.removeDocuments = function(db, callback) {
    var collection = db.collection('documents');
    collection.deleteMany({}, function(err, result) {
      console.log("Removed all documents");
      callback(result);
    });    
  }