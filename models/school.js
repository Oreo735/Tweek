const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Class = require("./class");
const Teacher = require("./teacher");

const SchoolSchema = new Schema({
  classes: [Class],
  teachers: [Teacher],
});

module.exports = mongoose.model("School", SchoolSchema);
