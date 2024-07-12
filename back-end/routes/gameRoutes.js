const express = require('express');
const router = express.Router();
const { createGame, sendGame, startGame } = require("../controllers/gameController")
const {checkAuthenticated, checkGameAuthenticated, checkHost} = require("../middleware/authenticate")

router.post("/create",checkAuthenticated, createGame)
router.get("/join", checkGameAuthenticated, sendGame )
router.put("/start/:game_id", checkAuthenticated, checkHost, startGame)


module.exports = router;



