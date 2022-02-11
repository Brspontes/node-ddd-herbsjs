
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const routes = require('./routes')


dotenv.config()
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(routes)

const apiPorta = process.env.PORTA
app.listen(apiPorta, () => console.log(`Api rodando: ${apiPorta}`))
