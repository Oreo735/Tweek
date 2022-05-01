const Teacher = require("./teacher");
const Classroom = require("./classroom");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PeriodSchema = new Schema({
  teacher: { type: Schema.Types.ObjectId, ref: "Teacher" },
  subject: String,
  classroom: { type: Schema.Types.ObjectId, ref: "Classroom" },
  time: Number,
});

module.exports = mongoose.model("Period", PeriodSchema);
