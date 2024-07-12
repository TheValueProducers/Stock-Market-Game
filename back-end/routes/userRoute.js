const express = require('express');
const router = express.Router();
const passport = require('passport');

const {loginEndpoint, registerUser, authenticateUser, userLogout } = require("../controllers/userController")

router.post("/login", authenticateUser(passport), loginEndpoint)
router.post("/register", registerUser)
router.post("/logout", userLogout )


module.exports = router;

