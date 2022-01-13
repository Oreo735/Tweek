const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Day = require("./day");

const TimetableSchema = new Schema({
  days: [Day],
});

module.exports = mongoose.model("Timetable", TimetableSchema);
