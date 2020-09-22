const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/User");

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
      if (err) return done(err); // something went wrong with database
      if (!user) return done(null, false); // if no user exists
      user.comparePassword(password, done); // check if password is correct
    });
  })
);
