const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const server = express()
require('dotenv').config()

server.use(express.json())
server.use(helmet())
server.use(cors({ origin: '*' }))

const auth = require('../auth/validate-middleware.js')





server.get('/', (req, res) => {
    res.send('Hello! Clients!!!')
})

module.exports = server