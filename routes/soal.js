var express = require("express");
var router = express.Router();

let benar = 0;
let salah = 0;

const question = {
  text: "Siapa yang paling tampan?",
  options: ["Rauhan", "Miftah", "Arief", "Jon"],
  answer: "Jon",
};

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("soal", { question, benar, salah });
});

router.post("/answering", function (req, res, next) {
  const { ans } = req.body;
  ans === question.answer ? benar++ : salah++;
  res.redirect(302, "/soal");
});

module.exports = router;
