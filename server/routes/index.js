const router = require("express").Router();
const { User } = require("../models");

router.get("/api/admin/all", (req, res) => {
  User.find({}).then(data => res.json(data));
});

module.exports = router;
