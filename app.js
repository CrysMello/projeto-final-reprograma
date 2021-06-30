const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config()

const db = require("./src/data/database");

db.connect();

app.use(cors());
app.use(express.json());

const posts = require("./src/routes/establishmentRoutes");



app.get("/", (req, resp) => {
  resp.status(200).json({
    mensagem: "Tudo na normalidade!",
  });
});
app.get("/establishment", (req, resp) => {
  resp.status(200).json(establishment);
});

app.use("/", posts)

module.exports = app;
