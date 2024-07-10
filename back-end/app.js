require("dotenv").config()
const PORT = process.env.PORT || 3001;
const express = require('express');
const session = require("express-session");
const passport = require("passport")
const initializePassport = require("./config/passport")
const {sequelize} = require("./models")
initializePassport(passport)

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: 'nwg93g4g4n',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening to port ${PORT}`);
    });
  }).catch(err => {
    console.error('Error syncing database:', err);
  });


