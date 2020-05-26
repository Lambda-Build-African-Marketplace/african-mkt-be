const db = require('../data/dbConfig.js')

module.exports = {
    find
}

async function find(id){
    const user = await db('user').where({ id }).first()
    return user
}