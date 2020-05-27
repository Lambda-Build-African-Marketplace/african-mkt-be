const db = require('../data/dbConfig.js')

module.exports = {
    findById,
    findByFilter,
    addUser,
    updateUser,
    deleteUser,
    getUserItems
}

async function findById(id){
    const user = await db('user as u')
                    .where({ id })
                    .select('u.id', 'u.username', 'u.email', 'u.about', 'u.store_name')
                    .first()
    return user
}

function findByFilter(filter){
    return db('user').where(filter)
}

async function addUser(user) {
    const [id] = await db('user').insert(user, 'id');

    return findById(id)
}

async function updateUser(id, changes) {
    await db("user")
        .where({ id })
        .update(changes)

    return findById(id)
}

function deleteUser(id) {
    return db("user")
        .where({ id })
        .del()
}

async function getUserItems(id){
    const items = await db('user_item as ui')
        .join('user as u', 'u.id', 'ui.user_id')
        .join('item as i', 'i.id', 'ui.item_id')
        .join('category as c', 'c.id', 'i.category_id')
        .where('ui.user_id', id )
        .select(
            'i.id',
            'i.name',
            'i.description',
            'i.city',
            'i.country',
            'i.price',
            'i.photo_url',
            'c.type'
        )
    return items
}