const Period = require("./period").schema;
const Constraint = require("./constraint").schema;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DaySchema = new Schema({
  periods: [Period],
});

const TimetableSchema = new Schema({
  table: [DaySchema],
  constraints: [Constraint],
});

module.exports = mongoose.model("Timetable", TimetableSchema);
