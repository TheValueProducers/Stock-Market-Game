const router = require("express").Router()
const gameRoute = require("./gameRoutes")
const playerRoute = require("./playerRoutes")
const userRoute = require("./userRoute")


router.use("/game", gameRoute)
router.use("/player", playerRoute)
router.use("/user", userRoute)

module.exports = router