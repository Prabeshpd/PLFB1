var express = require("express");
var router = express.Router();

const userRouter = require("../modules/User/user.routes.api");

/* GET home page. */

router.use("/api/v1/users", userRouter);
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
