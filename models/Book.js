const mongoose = require("mongoose");
// var uniqueValidator = require("mongoose-unique-validator");

const BookSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  authors: {
    type: String,
    // required: true,
  },
  description: String,
  link: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  description: String,
});

module.exports = mongoose.model("Book", BookSchema);
