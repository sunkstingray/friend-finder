// Dependencies
var friendsData = require("../data/friends.js");
var fs = require("fs");
var path = require("path");


// Routing
module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


  app.post("/api/friends", function(req, res) {

    console.log(req.body);

    fs.readFile(path.join(__dirname, "../data/friends.json"), 'utf-8', function(err, data) {
      if (err) throw err

      var friendsArray = JSON.parse(data);

      console.log(friendsArray);

      // for (var i = 0; i < friendsArray.length; i++) {
      //   for (var j = 0; j < friendsArray[i].length; j++){
      //     var difference = Math.abs(friendsArray[i].scores[])
      //   }
      // }

      friendsArray.friends.push(req.body);

      console.log(friendsArray);

      fs.writeFile(path.join(__dirname, "../data/friends.json"), JSON.stringify(friendsArray), 'utf-8', function(err) {
        if (err) throw err
        console.log('Done!')
      })
    })


      //friendsData.push(req.body);


      res.json(req.body);
      
  });

}
