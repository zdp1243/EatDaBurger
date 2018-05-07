var express = require("express");
var router = express.Router();

//Import model (burger.js) to use database functions
var burger = require("../models/burger.js");

//Create routes and set up logic when required within routes
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers/create", function(req, res) {
  console.log("post received");
  burger.createOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function() {
      res.redirect("/");
    }
  );
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne(
    {
      devoured: req.body.devoured
    },
    condition,
    function() {
      res.redirect("/");
    }
  );
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function() {
    res.redirect("/");
  });
});

//Export routes for server.js to use
module.exports = router;
