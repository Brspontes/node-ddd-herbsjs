import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import * as dotenv from 'dotenv'

dotenv.config()
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const apiPorta = process.env.PORTA
app.listen(apiPorta, () => console.log(`Api rodando: ${apiPorta}`))
