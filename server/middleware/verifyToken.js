const jwt = require('jsonwebtoken')
const { SECRET } = require('../config')
const JWT_SECRET = SECRET

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')

    if (!token) {
        res.status(401).json({ err: "Token is Wrong/Not found!" })
    }
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.userId;
    next();
}

module.exports = verifyToken