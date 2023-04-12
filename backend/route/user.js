const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("User route is up and running");
});

module.exports = router;
