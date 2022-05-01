const Constraint = require("./constraint").schema;
const Day = require("./day").schema;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TimetableSchema = new Schema({
  table: [Day],
  constraints: [Constraint],
  score: Number,
});

module.exports = mongoose.model("Timetable", TimetableSchema);
