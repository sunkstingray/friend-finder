// LOAD DATA
var friendsData = require("../data/friends.js");

// ROUTING
module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {

    res.json(calcDifference(req.body));

    friendsData.push(req.body);

  });

};


// Function to calculate score differences
function calcDifference(userInput) {


  var individualDifferenceArray = [];
  var individualDifference;
  var differenceArray = [];

  for (var i = 0; i < friendsData.length; i++) {


    individualDifferenceArray = [];

    for (var j = 0; j < friendsData[i].scores.length; j++) {



      var difference = Math.abs(friendsData[i].scores[j] - userInput.scores[j]);
      individualDifferenceArray.push(difference);

    }
    individualDifference = individualDifferenceArray.reduce(getSum);
    differenceArray.push(individualDifference);
  }
  var bestMatch = friendsData[minimunDifference(differenceArray)];
  return bestMatch;
}

// Function to get sum of differences
function getSum(total, num) {
  return total + num;
}

// Function to get minimun difference
function minimunDifference(differenceArray) {
  var minDifference = Math.min.apply(Math, differenceArray);
  for (k = 0; k < differenceArray.length; k++) {
    if(differenceArray[k] === minDifference) {
      return k;
    }
  }
}