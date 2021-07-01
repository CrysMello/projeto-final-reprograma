const express = require("express");
const controller = require("../controllers/establishmentController");
const router = express.Router();


router.post("/register", controller.createEstablishment)

router.get("/register", controller.showEstablishments)

router.patch("/:id", controller.updateStablishment);

router.delete("/:id", controller.deleteEstablishiment)

module.exports = router
