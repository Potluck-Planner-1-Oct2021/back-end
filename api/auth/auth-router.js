const router = require('express').Router();

router.post('/register', (req, res, next) => {
    try {
        res.status(200).json('register')
    } catch (error) {
        next(error);
    }
})
router.post('/login', (req, res, next) => {
    try {
        res.status(200).json('register')
    } catch (error) {
        next(error);
    }
})

module.exports = router;