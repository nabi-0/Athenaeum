const mongoose = require("mongoose");
// var uniqueValidator = require("mongoose-unique-validator");

const TodoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
