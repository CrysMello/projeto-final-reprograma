const express = require("express");
const controller = require("../controllers/establishmentController");
const router = express.Router();


router.post("/register", controller.PostEstablishment)


router.get("/", (req,res)=> res.status(200).send("ok"))
module.exports = router
