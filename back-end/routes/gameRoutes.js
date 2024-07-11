const express = require('express');
const router = express.Router();
const { createGame } = require("../controllers/gameController")
const {checkAuthenticated} = require("../middleware/authenticate")

router.post("/create",checkAuthenticated, createGame)

module.exports = router



