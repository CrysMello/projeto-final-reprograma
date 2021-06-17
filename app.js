const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());
app.use(express.json());

require("./src/controllers/establishmentController")(app);


module.exports = app