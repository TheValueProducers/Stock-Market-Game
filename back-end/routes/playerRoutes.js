const express = require('express');
const router = express.Router();

const {authenticatePlayer, clearPlayer} = require("../controllers/playerController")

router.post("/authenticate", authenticatePlayer)
router.delete("/finish-game", clearPlayer)

module.exports = router

