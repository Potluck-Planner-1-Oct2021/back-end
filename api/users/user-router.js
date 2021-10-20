const express = require('express')
const router = express.Router()
const Um = require('./user-model');
const { restricted } = require('../auth/auth-middleware');


router.get('/', restricted, async (req, res) => {
    const allUsers = await Um.find()
    res.status(200).json(allUsers)
})

router.get('/:id', restricted, async (req, res, next) => {
    try {
        const { id } = req.params
        const allUsers = await Um.findById(id)
        res.status(200).json(allUsers)

    } catch (error) {
        next(error)
    }
})

module.exports = router;