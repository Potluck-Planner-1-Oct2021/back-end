const express = require('express')
const router = express.Router()
const Um = require('./user-model');
const { restricted } = require('../auth/auth-middleware');


router.get('/', restricted, async (req, res) => {
    const allUsers = await Um.find()
    res.status(200).json(allUsers)
})


module.exports = router;