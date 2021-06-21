//const { request } = require("express");
const mongoose = require("mongoose");
const Establishment = require("../models/establishment");


const getAll = async(req, resp) => {
  response.status(200).json(Establishment);
};

const getById = (req, resp) => {
  const idRequered = request.params.id
  const establishmentFilter = Establishment.find((establishment) => establishment.id == idRequered);

  resp.status(200).send(establishmentFilter);
};

const PostEstablishment = async (request, response) => {
  const nomeRequired = request.body.nome
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
  })

  try {
    const postSave = await newPost.save()

    response.status(201).json([
      {
        mensagem: "Post criado com sucesso",
        newPost,
      },
    ]);
  }
  catch (err) {
    response.status(500).send({
      mensagem: err.message
    })
  }
};

module.exports = {
  getAll,
  getById,
  PostEstablishment,
}
