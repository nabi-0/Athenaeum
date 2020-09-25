const mongoose = require("mongoose");
// var uniqueValidator = require("mongoose-unique-validator");

const BookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  author: {
    type: String,
    required: false,
  },
  id: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model("Book", BookSchema);
