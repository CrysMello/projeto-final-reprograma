const mongoose = require("mongoose");

const establishmentSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nome: {
    type: String,
    unique: false,
    require: true,
  },
  CNPJ: {
    type: String,
    unique: true,
    required: true,
  },
  Estado: {
    type: String,
    unique: false,
    required: true,
  },
  Estado: {
    type: String,
    unique: false,
    required: true,
  },
  Bairro: {
    type: String,
    unique: false,
    required: false,
  },
  CEP: {
    type: String,
    unique: false,
    required: false,
  },
  Telefone: {
    type: String,
    unique: false,
    required: true,
  },
  E_Mail: {
    type: String,
    unique: true,
    required: false,
  },
  Site: {
    type: String,
    unique: false,
    required: false,
  },
  Tipos_de_Atividades: [
    {
      type: String,
      Atividades: ["Canicross", "Hospedagem", "trilhas proximas"],
    },
  ],
  createdAt: {
    type: Date,
    defaut: Date.now,
  },
});

module.exports = mongoose.model("establishment", establishmentSchema)
