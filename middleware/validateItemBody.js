const Category = require('../models/category-model.js')

async function validateItemBody(req,res, next) {
    const { name, price, description, city, country, category_id, category } = req.body;
    if(Object.keys(req.body).length === 0) {
        res.status(400).json({ message: "Missing item body" });
    }
    else if(!name){
        return res.status(400).json({error: `need a name for a new item`});
    }
    else if(!price){
        return res.status(400).json({error: `need a price for a new item!`});
    }
    else if(category){
        return res.status(400).json({error: `need a category_id instead of category!`});
    }
    else if(category_id){
            const cat = await Category.findById(category_id)
            console.log('category_id in validateItemBody', cat)
            if(!cat){
                res.status(404).json({ message: "Invalid Category ID." });
            }
    }
    next();

}

module.exports= validateItemBody;