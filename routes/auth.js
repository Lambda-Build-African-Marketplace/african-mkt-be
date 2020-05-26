const router = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/user-model.js')

/*Will write login and signup endpoints here only */

module.exports = router