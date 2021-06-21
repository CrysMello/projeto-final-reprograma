const mongoose = require("mongoose");


const EstablishmentSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nome: {
    type: String,
    unique: false,
    require: true,
  },
  cnpj: {
    type: String,
    unique: true,
    required: true,
  },
  estado: {
    type: String,
    unique: false,
    required: true,
  },
  cidade: {
    type: String,
    unique: false,
    required: true,
  },
  bairro: {
    type: String,
    unique: false,
    required: false,
  },
  cep: {
    type: String,
    unique: false,
    required: false,
  },
  telefone: {
    type: String,
    unique: false,
    required: true,
  },
  e_mail: {
    type: String,
    unique: true,
    required: false,
  },
  site: {
    type: String,
    unique: false,
    required: false,
  },
  tipos_atividades:
    {
      type: String,
    },
  createdAt: {
    type: Date,
    defaut: new Date,
  },
});

module.exports = mongoose.model("establishment", EstablishmentSchema);

