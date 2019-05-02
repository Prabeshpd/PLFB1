const router = require("express").Router();
const UserController = require("../User/user.controller");

router.post("/", (req, res, next) => {
  console.log(req.body);
  let payload = req.body;
  console.log(payload);
  UserController.createUsingEmail(payload)
    .then(d => res.json(d))
    .catch(e => next(e));
});

module.exports = router;
