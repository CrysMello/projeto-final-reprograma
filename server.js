//const establishment = require("./src/models/establishment");
//const express = require("express");
//const app = express();
//const mongoose = require("mongoose");
//const bodyParser = require("body-parser");

const app = require("./app")

//criando rotas

//const establishmentRouter = require ("./src/routes/establishmentRoutes")

const PORT = process.env.PORT || 8080;

app.listen(PORT, function (erro) {
  if (erro) {
    console.log("Servirdor com erro,não diga que o servidor está perdido, tente outra vez! ")
  } else {
    console.log(`Servidor bombando na porta 8080`)
  }
    })