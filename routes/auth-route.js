const router = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/user-model.js')

/*Will write login and signup endpoints here only */

router.post('/register', validateUser, (req,res) => {
    let user = req.body
    const hash = bcrypt.hashSync(user.password, 10)
    user.password = hash

    User.addUser(user)
        .then(newUser => {
            const token = generateToken(newUser);
            delete newUser.password;
            res.status(201).json({ newUser, token });
        })
        .catch(error => {
            console.log('error in REGISTER', error)
            res.status(500).json({ message: `Error registering new user: ${error}`})
        })
})

router.post('/login', validateUser, (req,res) => {
    const { email, password } = req.body

    User.findByFilter({ email })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                delete user.password;
                res.status(200).json({
                    user,
                    token 
                });
            } else {
                res.status(401).json({ message: "Invalid Email or Password" });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        })  
})


function generateToken(user) {
    const payload = {
        id: user.id, 
        email: user.email
    };
    const options = {
        expiresIn: '7d'
    };
    return jwt.sign(payload, process.env.JWT_SECRET, options);
}

function validateUser(req, res, next) {
    if (!req.body.email || !req.body.password) {
        res.status(400).json({ message: 'Email & password fields are required.' });
    } else {
        next();
    }
}

module.exports = router