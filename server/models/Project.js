const mongoose = require("../config/mongoose");

const { Schema } = mongoose;

const projectSchema = new Schema({
  project: {
    type: String,
    required: true
  },
  name: {
    type: String,
    unique: true,
    required: true
  },
  repo: {
    type: String,
    unique: true,
    required: true
  },
  url: {
    type: String,
    unique: true,
    required: true
  },
  contributors: {
    type: Array,
    required: true
  },
  description: {
    type: String,
    default: ""
  },
  img: {
    type: String,
    default: ""
  }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
