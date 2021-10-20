const db = require('../data/db-config');
async function find() {
    const somehting = await db('users as u')
        .leftJoin('potlucks as p', 'u.user_id', 'p.user_id')
        .select(
            'u.user_id',
            'username',
            'p.potluck_id',
            'potluck_name',
            'date',
            'time',
            'location',
        );

    return somehting;
}
async function findBy(filter) {
    const found = await db('users').where(filter);
    return found;
}

async function findById(user_id) {
    const rows = await db('users as u')
        .leftJoin('potlucks as p', 'u.user_id', 'p.user_id')
        .select(
            'u.user_id',
            'username',
            'email',
            'p.potluck_id',
            'potluck_name',
            'date',
            'time',
            'location',
        )
        .where('u.user_id', user_id);
    const results = {
        user_id: rows[0].user_id,
        username: rows[0].username,
        putlocks: rows.map((item) => {
            return {
                potluck_id: item.potluck_id,
                potluck_name: item.potluck_name,
                date: item.date,
                time: item.time,
                location: item.location,
            };
        }),
    };
    return results;
}

const update = async (user_id, potlucks) => {
    await await db('users as u')
        .leftJoin('potlucks as p', 'u.user_id', 'p.user_id')
        .where({ user_id: user_id })
        .update(potlucks);
};

async function add(user) {
    const [newUserObject] = await db('users').insert(user, [
        'username',
        'password',
        'email',
    ]);
    return newUserObject;
}

module.exports = {
    find,
    findBy,
    findById,
    add,
    update,
};
