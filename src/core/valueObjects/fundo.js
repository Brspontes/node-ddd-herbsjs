const { entity, field } = require("@herbsjs/herbs")

const Fundo = entity('Fundo', {
  cnpj: field(String),
  razaoSocial: field(String),
  nomeFantasia: field(String)
})

module.exports = Fundo
