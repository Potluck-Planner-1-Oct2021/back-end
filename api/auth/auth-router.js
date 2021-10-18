const bcryptjs = require('bcryptjs');
const {
    checkPasswordLength,
    checkUsernameExists,
    checkUsernameFree,
} = require('./auth-middleware');
const { add, findBy } = require('../users/user-model');
const router = require('express').Router();
const buildToken = require('../../token-builder');
router.post(
    '/register',
    checkUsernameFree,
    checkPasswordLength,
    async (req, res, next) => {
        console.log(req.body.password);
        try {
            const hash = bcryptjs.hashSync(req.body.password, 4);
            req.body.password = hash;
            console.log(req.body.password);
            const newUser = await add(req.body);
            res.status(200).json(newUser);
        } catch (error) {
            next(error);
        }
    },
);
router.post('/login', checkUsernameExists, async (req, res, next) => {
    try {
        if (
            req.user &&
            bcryptjs.compareSync(req.body.password, req.user.password)
        ) {
            const token = buildToken(req.user);
            res.status(200).json({
                message: `welcome ${req.user.username}!`,
                token: token,
            });
        } else {
            next({ status: 401, message: 'Invalid credentials' });
        }
    } catch (error) {
        next(error);
    }
});

module.exports = router;
