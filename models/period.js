const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Teacher = require("./teacher");

const PeriodSchema = new Schema({
  teacher: Teacher,
  subject: String,
});

module.exports = mongoose.model("Period", PeriodSchema);
