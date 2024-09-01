const express = require('express');
const router = express.Router();
const passport = require('passport');

const {loginUser, registerUser,  userLogout, authCheck } = require("../controllers/userController")

router.post("/login", loginUser(passport))
router.post("/register", registerUser)
router.post("/logout", userLogout )
router.get("/auth-check", authCheck)


module.exports = router;

