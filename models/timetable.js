const Period = require("./period").schema;
const Constraint = require("./constraint").schema;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TimetableSchema = new Schema({
  table: [[Period]],
  constraints: [Constraint],
  score: Number,
});

module.exports = mongoose.model("Timetable", TimetableSchema);
dffujjgjkg