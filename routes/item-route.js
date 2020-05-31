const router = require('express').Router()

const Item = require('../models/item-model.js')
const validateItemID = require('../middleware/validateItemID.js')
const validateItemBody = require('../middleware/validateItemBody.js')


router.get('/', (req, res) => {
    Item.getAllItems()
        .then(items => {
            res.status(200).json(items)
        })
        .catch(error => {
            res.status(500).json(error);
        })
})

router.get('/:id', validateItemID, (req, res)=> {
    const { id } = req.params;

    Item.findById(id)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(error => {
            res.status(500).json(error);
        })
})

router.post('/:user_id', validateItemBody, (req,res) => {
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

router.delete('/:id', validateItemID, (req, res) => {
    const { id } = req.params;

    Item.deleteItem(id)
        .then(deletedI => {
            res.status(200).json(deletedI)
        })
        .catch(error => {
            res.status(500).json(error);
        })
})


router.put('/:id', validateItemID, (req, res) => {
    const { id } = req.params;

    Item.updateItem(id, req.body)
        .then(updatedItem => {
            res.status(200).json(updatedItem)
        })
        .catch(error => {
            console.log('error in PUT id on items', error)
            res.status(500).json(error);
        })
})


//Todo: middleware to validate whether an item ID existes [x]
//Todo: middleware to validate item body [x]
module.exports = router