const db = require('../data/dbConfig.js')

module.exports = {
    getAllItems,
    findById
}

function getAllItems(){
    return db('item')
}

async function findById(id){
    const item = await db('item as i')
                    .where({ id })
                    // .select('u.id', 'u.username', 'u.email', 'u.about', 'u.store_name')
                    .first()
    return item
}

