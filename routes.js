const { Router } = require('express')
const RemessaController = require( './src/application/controllers/remessaController')

const routes = Router()
const remessa = new RemessaController()

routes.post('/remessa', remessa.EnviarRemessa)
module.exports = routes
