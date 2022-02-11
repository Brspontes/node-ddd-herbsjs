const criarRemessaLiquidacao = require("../../domain/useCases/remessas/criarRemessaLiquidacao")

module.exports = class RemessaController {

  constructor() {}

  EnviarRemessa = async (req, res) => {
    const { numeroControleParticipante, valorLiquidacao, cnpj, razaoSocial, nomeFantasia } = req.body

    const objeto = {
      numeroControleParticipante,
      valorLiquidacao,
      cnpj,
      razaoSocial,
      nomeFantasia
    }

    const useCase = criarRemessaLiquidacao()
    const resposta = await useCase.run(objeto)
    console.log(JSON.stringify(resposta))
    return res.send(req.body)
  }
}

