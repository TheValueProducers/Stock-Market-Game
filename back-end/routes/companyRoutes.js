const express = require('express');
const router = express.Router();
const {sendInfo} = require("../controllers/companyController")
const {checkGameAuthenticated} = require("../middleware/authenticate")


router.get("/info", checkGameAuthenticated, sendInfo);

module.exports = router