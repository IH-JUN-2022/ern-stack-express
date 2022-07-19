var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  // res.render("index", { title: "Express" });
  res.json({ title: "Express" });
});

router.get("/about", function (req, res, next) {
  // res.render("index", { title: "Express" });
  res.json({ message: "This is the about pageeeeeeeeee" });
});

module.exports = router;
