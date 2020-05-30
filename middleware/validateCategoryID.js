const Category = require('../models/category-model.js')
const db = require('../data/dbConfig.js')

async function validateItemID (req, res, next) {
    const { id } = req.params;

    try{
        const cat = await Category.findById(id)
        // console.log('Category ID middleware', cat)
        if(cat){
            next()
        }
        else {
            res.status(404).json({ message: "Invalid Category ID." });
        }
    }
    catch(error){
        res.status(500).json({ message: "There was an error validating the category ID" });
    }
}

module.exports = validateItemID