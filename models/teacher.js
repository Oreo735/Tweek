const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
  firstname: String,
  lastname: String,
  age: Number,
  phonenumber: Number,
  weeklyhours: Number,
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Teacher", TeacherSchema);
