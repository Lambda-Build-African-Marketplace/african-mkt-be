const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const server = express()
require('dotenv').config()

server.use(express.json())
server.use(helmet())
server.use(cors({ origin: '*' }))

const auth = require('../auth/validate-middleware.js')

const authRouter = require('../routes/auth-route.js')
const itemRouter = require('../routes/item-route.js')
const userRouter = require('../routes/user-route.js')
const categoryRouter = require('../routes/category-route.js')
server.use('/api/auth', authRouter)

/*will add auth router to the routes below */
server.use('/api/items', auth, itemRouter)
server.use('/api/users', auth, userRouter)
server.use('/api/categories', auth, categoryRouter)

server.get('/', (req, res) => {
    res.send('Hello! Clients!!!')
})

module.exports = server