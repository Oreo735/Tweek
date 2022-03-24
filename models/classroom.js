const Timetable = require("./timetable").schema;
const Teacher = require("./teacher");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClassroomSchema = new Schema({
  name: String,
  housemaster: { type: Schema.Types.ObjectId, ref: "Teacher" },
  table: Timetable,
});

module.exports = mongoose.model("Classroom", ClassroomSchema);
