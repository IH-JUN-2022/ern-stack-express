var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ message: "USERS" });
});

//if there is no username or password, res.json "Please enter username and password"
//else return body
router.post("/signup", function (req, res, next) {
  console.log("BODY", req.body);
  if (!req.body.user || !req.body.password) {
    res.json({ message: "Please enter username and password" });
  } else {
    res.json({ user: req.body.user, message: `Welcome, ${req.body.user}` });
  }
});

router.get("/:username", function (req, res, next) {
  res.json({ username: req.params.username });
});

module.exports = router;
