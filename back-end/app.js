require("dotenv").config();
const express = require('express');
const session = require("express-session");
const cookieParser = require('cookie-parser');
const passport = require("passport");
const cors = require('cors');
const initializePassport = require("./config/passport");
const { sequelize } = require("./models");
const router = require("./routes/index");
const http = require("http");
const redisClient = require('./config/redisClient');
const initializeSocketIo = require('./config/socketIo'); // Import the Socket.IO configuration

const PORT = process.env.PORT || 3001;

const app = express();
const server = http.createServer(app);

// Initialize Socket.IO
const io = initializeSocketIo(server); // Call the function to initialize Socket.IO

// Function to initialize and start the application
function initializeApp() {
  initializePassport(passport);

  // CORS configuration with credentials
  app.use(cors({
    origin: 'http://localhost:3000',  
    credentials: true,  
  }));

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(session({
    secret: "5d65dx7456x7", // Use environment variable for secret
    resave: false,
    saveUninitialized: false,
    
  }));

  app.use(passport.initialize());
  app.use(passport.session());
 

  app.use("/api/v1", router);

  sequelize.sync().then(() => {
    server.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  }).catch(err => {
    console.error('Error syncing database:', err);
  });

  // Graceful shutdown
  process.on('SIGINT', async () => {
    console.log('Closing Redis client...');
    await redisClient.quit();
    process.exit();
  });
}

redisClient.connect().then(() => {
  initializeApp();
}).catch(err => {
  console.error('Failed to connect to Redis:', err);
});