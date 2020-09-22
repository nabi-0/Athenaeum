require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const PORT = 4000;

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:4000", // <-- location of the react ap we're connecting to
    credentials: true,
  })
);
app.use(
  session({
    secret: process.env.sessionsecret,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser(process.env.sessionsecret));
// Routes
app.post("/login", (req, res) => {
  console.log(req.body);
});
app.post("/register", (req, res) => {
  console.log(req.body);
});
app.get("/user", (req, res) => {});

// Start server
app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}.`);
});
