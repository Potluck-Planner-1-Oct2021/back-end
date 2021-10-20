
const db = require('../data/db-config')

async function insertEvent(event) {
    const [newEventObject] = await db('potlucks')
        .insert(event, [
            'user_id', 'potluck_name', 'location', 'date', 'time'
        ])
    return newEventObject
}

// async function insertGuest(guest) {
//     const [newGuestObject] = await db('guests')
//         .insert(guest, [
//             'user_id', 'potluck_id', 'accepted'
//         ])
//     return newGuestObject
// }

// function getById(id) {
//     return db('potlucks')
//         .where('potluck_id', id)
//         .first()
// }

// async function insertItem(newItem) {
//     const [newItemObject] = await db('foods')
//         .insert(newItem, [
//             'item_id', 'potluck_id', 'food_name'
//         ])
//     return newItemObject
// }

module.exports = {
    insertEvent,
    // getById,
    // insertItem,
    // insertGuest
}