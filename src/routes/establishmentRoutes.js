const express = require("express");
const controller = require("../controllers/establishmentController");
const router = express.Router();


router.post("/register", controller.PostEstablishment)

router.get("/register", controller.showEstablishments)


module.exports = router
