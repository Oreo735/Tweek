const Classroom = require("./classroom");
const Teacher = require("./teacher");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SchoolSchema = new Schema({
  teachers: [{ type: Schema.Types.ObjectId, ref: "Teacher" }],
  classrooms: [{ type: Schema.Types.ObjectId, ref: "Classroom" }],
});

module.exports = mongoose.model("School", SchoolSchema);
