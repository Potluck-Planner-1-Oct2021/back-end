const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('./secret')
module.exports = function (user) {
    // we need a lib to build the token: 'jsonwebtoken'
    // we need a secret string only the server knows about
    const payload = {
        subject: user.user_id,
        username: user.username,
    }
    const options = {
        expiresIn: '1d'
    }
    return jwt.sign(payload, JWT_SECRET, options,)
}