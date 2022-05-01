const Timetable = require("./timetable").schema;
const Teacher = require("./teacher");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClassroomSchema = new Schema({
  name: String,
  housemaster: { type: Schema.Types.ObjectId, ref: "Teacher" },
});

module.exports = mongoose.model("Classroom", ClassroomSchema);
