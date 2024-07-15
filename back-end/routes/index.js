const router = require("express").Router()
const gameRoute = require("./gameRoutes")
const playerRoute = require("./playerRoutes")
const userRoute = require("./userRoute");
const companyRoute = require("./companyRoutes")


router.use("/game", gameRoute)
router.use("/player", playerRoute)
router.use("/user", userRoute)
router.use("/company", companyRoute)

module.exports = router