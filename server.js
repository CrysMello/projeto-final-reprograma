const establishment = require("./src/models/establishment");

const express = require("express");
const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");

const app = express();
const PORT = process.env.PORT || 8080;
const db = require("./src/data/database");
db.connect();

app.get("/", (resq, resp) => {
  resp.status(200).json({
    mensagem: "Tudo na normalidade!",
  });
});

app.get("/establishment", (req, resp) => {
  resp.status(200).json(establishment);
});

app.listen(PORT, () => console.log(`Servidor bombando na porta ${PORT}`));
