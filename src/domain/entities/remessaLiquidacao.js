const { entity, field } = require("@herbsjs/herbs")
const { Fundo } = require("../../core/valueObjects/fundo")

const RemessaLiquidacao = entity('RemessaLiquidacao', {
  fundoInfo: field(Fundo),
  numeroControleParticipante: field(String),
  valorLiquidacao: field(Number)
})

module.exports = RemessaLiquidacao
