const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConstraintSchema = new Schema({
  name: String,
  isSatisfied: { type: Boolean, default: true },
  penelty: Number,
});

module.exports = mongoose.model("Constraint", ConstraintSchema);
