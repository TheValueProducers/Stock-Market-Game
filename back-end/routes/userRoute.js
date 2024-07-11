const express = require('express');
const router = express.Router();
const passport = require('passport');
const { authenticateUser } = require("../middleware/authenticate")
const {loginEndpoint, registerUser} = require("../controllers/userController")

router.post("/login", authenticateUser(passport), loginEndpoint)
router.post("/register", registerUser)


module.exports = router;

