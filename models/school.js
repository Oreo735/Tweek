const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Classroom = require("./classroom");
const Teacher = require("./teacher");

const SchoolSchema = new Schema({
  classrooms: [Classroom],
  teachers: [Teacher],
});

module.exports = mongoose.model("School", SchoolSchema);
