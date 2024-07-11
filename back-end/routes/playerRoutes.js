const express = require('express');
const router = express.Router();

const {authenticatePlayer} = require("../controllers/playerController")

router.post("/authenticate", authenticatePlayer)

module.exports = router

