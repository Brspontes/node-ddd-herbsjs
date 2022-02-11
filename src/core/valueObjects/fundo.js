const { entity, field } = require("@herbsjs/herbs")

const fundo = entity('Fundo', {
  cnpj: field(String),
  razaoSocial: field(String),
  nomeFantasia: field(String)
})

module.exports = fundo
