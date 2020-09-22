const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
app.use(cookieParser());
app.use(express.json());
const PORT = 5000;

mongoose.connect(
  "mongodb://localhost:27017/athenaeum",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("successfully connected to database");
  }
);

app.listen(PORT, () => {
  console.log("express server started");
});
