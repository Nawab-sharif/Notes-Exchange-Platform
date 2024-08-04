const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.SECRET_KEY;

const verifyToken = (req, res, next) => {
    try {
        const token = req.header('Authorization')

        if (!token) {
            return res.status(401).json({ err: "Token is Wrong/Not found!" })
        }
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.userId;
        next();
    } catch (error) {
        res.status(500).json({ err: "Something went wrong!" })
    }
}
module.exports = verifyToken