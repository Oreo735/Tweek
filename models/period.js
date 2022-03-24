const Teacher = require("./teacher");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PeriodSchema = new Schema({
  subject: String,
  teacher: { type: Schema.Types.ObjectId, ref: "Teacher" },
  startTime: Date,
  endTime: Date,
});

module.exports = mongoose.model("Period", PeriodSchema);
