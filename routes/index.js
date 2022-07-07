var express = require("express");
var router = express.Router();

let counter = 0;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Jon Counterz", counter: counter });
});

/* POST increase counter by 1. */
router.post("/increase-counter", function (req, res, next) {
  counter = counter + 1;
  res.redirect(303, "/");
});

module.exports = router;
