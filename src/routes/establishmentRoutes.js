const express = require("express");
const controller = require("../controllers/establishmentController");
const router = express.Router();

router.post("/register", controller.createEstablishment);

router.get("/register", controller.showEstablishments);

router.patch("/register/:nome", controller.updateStablishment);

router.delete("/register/:nome", controller.deleteEstablishiment);

module.exports = router;
