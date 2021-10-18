const { findBy } = require('../users/user-model');

async function restricted(req, res, next) {
    next();
}

async function checkUsernameFree(req, res, next) {
    try {
        const usernameexist = await findBy({ username: req.body.username });
        if (usernameexist[0]) {
            next({ status: 422, message: 'Username taken' });
        } else {
            next();
        }
    } catch (error) {
        next();
    }
}

async function checkUsernameExists(req, res, next) {
    try {
        const { username } = req.body;
        const usernameexist = await findBy({ username: username });
        if (usernameexist[0]) {
            req.user = usernameexist[0];
            next();
        } else {
            next({
                status: 401,
                message: 'Invalid credentials',
            });
        }
    } catch (error) {
        next();
    }
}

async function checkPasswordLength(req, res, next) {
    try {
        const { password, username } = req.body;
        if (!password || password.length < 3 || !username || !username.trim()) {
            next({
                status: 422,
                message:
                    'Password must be longer than 3 chars and username is required',
            });
        } else {
            req.body = { username: username.trim(), password: password.trim() };

            next();
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    restricted,
    checkUsernameFree,
    checkUsernameExists,
    checkPasswordLength,
};
