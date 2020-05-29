const router = require('express').Router()

const Category = require('../models/category-model.js')

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
module.exports = router