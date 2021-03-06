const router = require('express').Router()
const User = require('../models/user-model.js')

//need to add middleware to validate user id [x]
const validateUserID = require('../middleware/validateUserID.js')

router.get('/:id/items', validateUserID, (req,res) => {
    const { id } = req.params;

    User.getUserItems(id)
        .then(items => {
            res.status(200).json(items)
        })
        .catch(error => {
            res.status(500).json(error);
        })
})

router.get('/:id', validateUserID, (req,res) => {
    const { id } = req.params;

    User.findById(id)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(error => {
            res.status(500).json(error);
        })
})

router.put('/:id', validateUserID, (req,res) => {
    const { id } = req.params;

    User.updateUser(id, req.body)
        .then(updatedUser => {
            res.status(200).json(updatedUser)
        })
        .catch(error => {
            res.status(500).json(error);
        })
})

router.delete('/:id', validateUserID, (req,res) =>{
    const { id } = req.params;

    User.deleteUser(id)
        .then(deletedUser => {
            res.status(204).json(deletedUser)
        })
        .catch(error => {
            res.status(500).json(error);
        })
})


module.exports = router