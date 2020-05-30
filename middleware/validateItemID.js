const Item = require('../models/item-model.js')
const db = require('../data/dbConfig.js')

async function validateItemID (req, res, next) {
    const { id } = req.params;

    try{
        const item = await Item.findById(id)
        // console.log('ITEM ID middleware', item)
        if(item){
            next()
        }
        else {
            res.status(404).json({ message: "Invalid Item ID." });
        }
    }
    catch(error){
        res.status(500).json({ message: "There was an error validating the item ID" });
    }
}

module.exports = validateItemID