const express = require('express')
const router = express.Router()
const Um = require('./user-model');


router.get('/', async (req, res) => {
    const allUsers = await Um.find()
    res.status(200).json(allUsers)
})


module.exports = router;