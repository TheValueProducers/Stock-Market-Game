const express = require('express');
const router = express.Router();
const { createGame, checkGameCreated } = require("../controllers/gameController")
const {checkAuthenticated, checkGameAuthenticated, checkHost} = require("../middleware/authenticate")

router.post("/create",createGame)
router.get("/check-game", checkGameCreated)



module.exports = router;



