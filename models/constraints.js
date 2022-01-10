const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConstraintSchema = new Schema({
    name: String,
    rank: {
        type: String,
        enum: ['hard', 'soft'],
        default: 'hard'
    },
    isSatisfied: { type: Boolean, default: true },
    penelty: { type: Number, default: 0 }
})

const ConstraintsSchema = new Schema({
    data: [Constraint]
})

module.exports = mongoose.model('Constraints', ConstraintsSchema);