const jwt = require('jsonwebtoken');

exports.authenticate = async (req, res, next) => {
    try {
        req.user = jwt.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        );
        next();
    } catch (e) {
        return res.status(401).json(e)
    }
};