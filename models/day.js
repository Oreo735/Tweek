const Period = require("./period").schema;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DaySchema = new Schema({
  name: String,
  periods: [Period],
});

module.exports = mongoose.model("Day", DaySchema);
