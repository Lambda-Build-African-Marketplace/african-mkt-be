const router = require('express').Router()

const Item = require('../models/item-model.js')

router.get('/', (req, res) => {
    Item.getAllItems()
        .then(items => {
            res.status(200).json(items)
        })
        .catch(error => {
            res.status(500).json(error);
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Item.findById(id)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(error => {
            res.status(500).json(error);
        })
})

//Todo: middleware to validate whether an item ID existes
module.exports = router