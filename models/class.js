const mongoose = require("mongoose");
const Teacher = require("./teacher");
const Timetable = require("./timetable");
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
  name: String,
  housemaster: Teacher,
  timetable: Timetable,
});

module.exports = mongoose.model("Class", ClassSchema);
