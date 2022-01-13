const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
  fullname: String,
  birthdate: Date,
  phonenumber: Number,
  weeklyhours: Number,
  phase: [String],
  days: [String],
});

module.exports = mongoose.model("Teacher", TeacherSchema);
