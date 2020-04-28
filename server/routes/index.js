const router = require("express").Router();
const { User, Project } = require("../models");

router.get("/api/admin/all", (req, res) => {
  User.find({}).then(data => res.json(data));
});

router.post("/api/admin/add/:id", (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.params.id },
    { $inc: { stars: 1 } }
  ).then(data => res.json(data));
});

router.post("/api/admin/remove/:id", (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.params.id },
    { $inc: { stars: -1 } }
  ).then(data => res.json(data));
});

router.get("/api/projects/all", (req, res) => {
  Project.find({}).then(data => res.json(data));
});

router.put(`/api/projects/desc/:id`, (req, res) => {
  Project.findByIdAndUpdate(
    { _id: req.params.id },
    { description: req.body.desc }
  ).then(data => res.json(data));
});

router.put(`/api/projects/img/:id`, (req, res) => {
  Project.findByIdAndUpdate(
    { _id: req.params.id },
    { img: req.body.url }
  ).then(data => res.json(data));
});

module.exports = router;
