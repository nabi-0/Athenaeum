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

const userRouter = require("./routes/User");
app.use("/user", userRouter);

// Testing User model and mongoose connections
// const User = require("./models/User");
// const userInput = {
//   username: "asdfasdf",
//   password: "9423859",
//   role: "admin",
// };
// const user = new User(userInput);
// user.save((err, document) => {
//   if (err) console.log(err);
//   console.log(document);
// });

app.listen(PORT, () => {
  console.log("express server started");
});
