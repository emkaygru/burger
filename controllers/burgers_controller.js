var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burger.selectAll((data) => {
    var hbsObject = {
      burgers: data,
    };
    res.render("index", hbsObject);
  });
});

//POST
//insertOne function
router.post("/", function (req, res) {
  burger.insertOne(["burger_name"], [req.body.name], function () {
    res.redirect("/");
  });
});

//PUT
//updateOne function
router.put("/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne(
    {
      devoured: req.body.devoured,
    },
    condition,
    function () {
      res.redirect("/");
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
