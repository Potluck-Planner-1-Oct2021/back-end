const db = require('../data/db-config');
async function find() {
    return await db('users')
}
async function findBy(filter) {
    const found = await db('users').where(filter)
    return found;
}

async function findById(user_id) {
    return db('users')
        .select('user_id', 'username')
        .where('user_id', user_id)
        .first();
}
async function add(user) {
    console.log(user.email)
    const [newUserObject] = await db('users').insert(user, ['username', 'password', 'email'])
    return newUserObject
}

module.exports = {
    find,
    findBy,
    findById,
    add,
}

