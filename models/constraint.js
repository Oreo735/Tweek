const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConstraintSchema = new Schema({
  name: String,
  rank: {
    type: String,
    enum: ["Hard", "Soft"],
    default: "Soft",
  },
  isSatisfied: { type: Boolean, default: true },
  penelty: { type: Number, default: 0 },
});

module.exports = mongoose.model("Constraint", ConstraintSchema);
