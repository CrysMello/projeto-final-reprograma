//const { request } = require("express");
const mongoose = require("mongoose");
const Establishment = require("../models/establishment");

// CREATE

const createEstablishment = async (request, response) => {
  const nomeRequired = request.body.nome;
  const cnpjRequired = request.body.cnpj;
  const estadoRequired = request.body.estado;
  const cidadeRequired = request.body.cidade;
  const bairroRequerid = request.body.bairro;
  const cepRequerid = request.body.cep;
  const telefoneRequerid = request.body.telefone;
  const e_mailRequerid = request.body.e_mail;
  const siteRequerid = request.body.site;
  const tipo_atividadeRequerid = request.body.tipo_atividade;

  const newPost = new Establishment({
    _id: new mongoose.Types.ObjectId(),
    nome: nomeRequired,
    cnpj: cnpjRequired,
    estado: estadoRequired,
    cidade: cidadeRequired,
    bairro: bairroRequerid,
    cep: cepRequerid,
    telefone: telefoneRequerid,
    e_mail: e_mailRequerid,
    site: siteRequerid,
    tipo_atividade: tipo_atividadeRequerid,
  });

  try {
    const postSave = await newPost.save();

    response.status(201).json([
      {
        mensagem: "Post criado com sucesso",
        newPost,
      },
    ]);
  } catch (err) {
    response.status(500).send({
      mensagem: err.message,
    });
  }
};

//READ

const showEstablishments = async (request, response) => {
  try {
    const establishments = await Establishment.find();
    return response.status(200).json(establishments);
  } catch (err) {
    return response.status(500).json({
      mensagem: err.message,
    });
  }
};

//UPDATE

const updateStablishment = async (request, response) => {
  const discoverEstablishment = await Establishment.findById(request.params.nome);
  if (discoverEstablishment == null) {
    return response
      .status(404)
      .json({ message: "Estabelecimento não encontrado." });
  }
  if (request.body.nome != null) {
    discoverEstablishment.name = request.body.nome;
  }
  try {
    const establishmentUpdate = await searchEstablishment.save();

    res.status(200).json(establishmentUpdate);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//DELETE

const deleteEstablishiment = async (req, res) => {
  const encontraEstudio = await Establishment.findById(req.params.nome);
  if (encontraEstudio == null) {
    return res.status(404).json({ message: "estudio não encontrado." });
  }

  try {
    await searchEstablishment.remove();
    res.status(200).json({ message: "foi deletado com sucesso" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createEstablishment,
  showEstablishments,
  updateStablishment,
  deleteEstablishiment,
};
