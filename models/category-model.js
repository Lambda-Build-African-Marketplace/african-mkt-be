const db = require('../data/dbConfig.js')


module.exports = {
    getAllCategories
}

function getAllCategories(){
    return db('category')
}