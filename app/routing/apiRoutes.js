// LOAD DATA
var friendsData = require("../data/friends.js");

// ROUTING
module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the friendsData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {

    console.log("1: " + req.body)

    res.json(calcDifference(req.body));

  });

};


// Function to calculate score differences
function calcDifference(userInput) {

  console.log("CD");

  var individualDifferenceArray = [];
  var individualDifference;
  var differenceArray = [];

  for (var i = 0; i < friendsData.length; i++) {

    console.log("Loop 1");
    console.log("Friends Data: " + friendsData[i]);

    individualDifferenceArray = [];

    for (var j = 0; j < friendsData[i].scores.length; j++) {

      console.log("Loop 2");

      console.log("A: " + friendsData[i].scores[j]);

      var difference = Math.abs(friendsData[i].scores[j] - userInput.scores[j]);
      individualDifferenceArray.push(difference);
      console.log("Inner: " + individualDifferenceArray);

    }
    individualDifference = individualDifferenceArray.reduce(getSum);
    console.log("Outer: " + individualDifference);
    differenceArray.push(individualDifference);
    console.log("differenceArray: " + differenceArray);
  }
  var bestMatch = friendsData[minimunDifference(differenceArray)];
  console.log("Best Match: " + bestMatch);
  return bestMatch;
}

// Function to get sum of differences
function getSum(total, num) {
  return total + num;
}

// Function to get minimun difference
function minimunDifference(differenceArray) {
  console.log(differenceArray);
  var minDifference = Math.min.apply(Math, differenceArray);
  console.log("minDifference: " + minDifference);
  for (k = 0; k < differenceArray.length; k++) {
    if(differenceArray[k] === minDifference) {
      console.log("4: " + k);
      return k;
    }
  }
}

// Function to calculate independent differences
function individualDifferences(i) {
  for (var j = 0; j < friendsArray[i].length; j++) {

    console.log("A: " + friendsArray[i].scores[j]);

    var difference = Math.abs(friendsArray[i].scores[j] - userInput.scores[j]);
    individualDifferenceArray.push(difference);
    console.log("Inner: " + individualDifferenceArray);
  }
}