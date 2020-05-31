const router = require('express').Router()

const Category = require('../models/category-model.js')
const validateCategoryID = require('../middleware/validateCategoryID')

router.get('/', (req,res) => {
    Category.getAllCategories()
        .then(categories => {
            res.status(200).json(categories)
        })
        .catch(error => {
            console.error('error in category GET', error)
            res.status(500).json({ message: `error retrieving all categories`})
        })
})

router.get('/:id', validateCategoryID, (req, res) => {
    const { id } = req.params;
    Category.findById(id)
        .then(category => {
            res.status(200).json(category)
        })
        .catch(error => {
            console.error('error in category GET by id', error)
            res.status(500).json({ message: `error retrieving categorie with id ${id}`})
        })
})

router.post('/', (req,res) => {
    Category.addCategory(req.body)
        .then(newCat => {
            res.status(201).json(newCat)
        })
        .catch(error => {
            console.error('error in category POST', error)
            res.status(500).json({ message: `error adding a new category`})
        })
})

router.delete('/:id', validateCategoryID, (req, res) => {
    const { id } = req.params;
    Category.deleteCategory(id)
        .then(deleted => {
            res.status(200).json(deleted)
        })
        .catch(error => {
            console.error('error in category DELETE by id', error)
            res.status(500).json({ message: `error deleting categorie with id ${id}`})
        })
})


module.exports = router