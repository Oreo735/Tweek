const mongoose = require("mongoose");
const Teacher = require("./teacher");
const Timetable = require("./timetable");
const Schema = mongoose.Schema;

const ClassroomSchema = new Schema({
  name: String,
  housemaster: Teacher,
  timetable: Timetable,
});

module.exports = mongoose.model("Classroom", ClassroomSchema);
