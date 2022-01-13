const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Period = require("./period");

const DaySchema = new Schema({
  name: {
    type: String,
    enum: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    default: "Sunday",
  },
  periods: [Period],
});

module.exports = mongoose.model("Day", DaySchema);
