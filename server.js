const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
app.use(cookieParser());
app.use(express.json());
const PORT = process.env.PORT || 5000;
const path = require("path");

require("dotenv").config();

// mongoose.connect(
//   "mongodb://localhost:27017/athenaeum",
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   () => {
//     console.log("successfully connected to database");
//   }
// );

const url = process.env.ATLAS_URL;
mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connected succesfully");
});

const userRouter = require("./routes/User");
app.use("/user", userRouter);

// Serves the build
// app.use(express.static(path.join(__dirname, "build")));
// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

// Testing User model and mongoose connections
// const User = require("./models/User");
// const userInput = {
//   username: "user",
//   password: "pass",
//   role: "admin",
// };
// const user = new User(userInput);
// user.save((err, document) => {
//   if (err) console.log(err);
//   console.log(document);
// });

// serves the build on PORT
// app.use(express.static(path.join(__dirname, "./build")));
// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

app.listen(PORT, () => {
  console.log(`Server is now started on port ${PORT}!`);
});
