const { Err, step, usecase } = require("@herbsjs/herbs")
const Fundo = require("../../../core/valueObjects/fundo")
const RemessaLiquidacao = require("../../entities/remessaLiquidacao")

const criarRemessaLiquidacao = () => 
  usecase('Insere uma remessa de liquidação no banco de dados', {
    request: {
      numeroControleParticipante: String,
      valorLiquidacao: Number,
      cnpj: String,
      razaoSocial: String,
      nomeFantasia: String
    },
    'Realiza a validação da entidade': step(async (ctx) => {
      const { numeroControleParticipante, valorLiquidacao, cnpj, razaoSocial, nomeFantasia } = ctx.req

      const request = RemessaLiquidacao.fromJSON({
        fundoInfo: Fundo.fromJSON({
          cnpj: cnpj,
          razaoSocial: razaoSocial,
          nomeFantasia: nomeFantasia
        }),
        numeroControleParticipante: numeroControleParticipante,
        valorLiquidacao: valorLiquidacao
      }, { allowExtraKeys: true })

      console.log(request)

      if (!request.isValid()) return Err(request.errors)
    })
  })

  module.exports = criarRemessaLiquidacao
