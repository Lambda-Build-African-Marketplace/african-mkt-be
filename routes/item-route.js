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

router.post('/:user_id', (req,res) => {
    // the id is the user_id
    const { user_id } = req.params;
    //Need to have FE send the user_id that does the post so that I
    //could link the user to the *posted item*
    Item.addItem(req.body, user_id)
        .then((item) => {
            res.status(201).json(item)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json(error);
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Item.deleteItem(id)
        .then(deletedI => {
            res.status(200).json(deletedI)
        })
        .catch(error => {
            res.status(500).json(error);
        })
})
//Todo: middleware to validate whether an item ID existes
//Todo: middleware to validate item body
module.exports = router