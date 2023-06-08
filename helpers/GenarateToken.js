const jwt = require('jsonwebtoken');

exports.generateToken = async (userId, secretKey) => {
    const payload = {userId};
    const options = {expiresIn: '2d'};
    return jwt.sign(payload, secretKey, options);
};