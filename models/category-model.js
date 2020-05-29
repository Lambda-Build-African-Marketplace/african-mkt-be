const db = require('../data/dbConfig.js')


module.exports = {
    getAllCategories,
    findById,
    findByFilter,
    addCategory,
    updateCategory,
    deleteCategory
}

function getAllCategories(){
    return db('category')
}

async function findById(id){
    const category = await db('category as c')
                    .where({ id })
                    .first()
    return category
}

function findByFilter(filter){
    return db('category').where(filter)
}

async function addCategory(body){
    const  [id] = await db('category').insert(body,'id')
    return findById(id)
}

async function updateCategory(id, changes) {
    console.log(changes)
    await db("category")
        .where({ id })
        .update(changes)

    return findById(id)
}

function deleteCategory(id) {
    return db("category")
        .where({ id })
        .del()
}
