require("dotenv").config();
const PORT = process.env.PORT || 3001;
const express = require('express');
const session = require("express-session");
const passport = require("passport");
const initializePassport = require("./config/passport");
const { sequelize } = require("./models");
const router = require("./routes/index");
const socketIo = require("socket.io")
const http = require("http")
const handleLiveGame = require("./services/liveGame")
const app = express();
const server = http.createServer(app)
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"]
  }
});

initializePassport(passport);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
  secret: "5d65dx7456x7",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/v1", router);
handleLiveGame(io)

sequelize.sync().then(() => {
  server.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
  });
}).catch(err => {
  console.error('Error syncing database:', err);
});