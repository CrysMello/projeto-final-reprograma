const express = require("express");
const controller = require("../controllers/establishmentController");
const router = express.Router();


router.post("/register", controller.createEstablishment)

router.get("/register", controller.showEstablishments)

router.patch("/register/:id", controller.updateStablishment);

router.delete("/register/:id", controller.deleteEstablishiment)

module.exports = router
