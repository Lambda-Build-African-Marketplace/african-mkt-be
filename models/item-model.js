const db = require('../data/dbConfig.js')

module.exports = {
    getAllItems
}

function getAllItems(){
    return db('item')
}