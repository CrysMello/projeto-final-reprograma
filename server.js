const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 8080;

const db = require("./src/data/database");
db.connect();

app.use(express.json());

app.listen(PORT, () => 
  console.log(`Servidor bombando ${PORT}`))
