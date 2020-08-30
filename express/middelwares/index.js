const jwt = require('jsonwebtoken')
const constants = require('../constants')

const verifyToken = (req, res, next) => {


    if (req.headers["authorization"]) {

        const [bearer, token] = req.headers["authorization"].split(" ")

        jwt.verify(token, constants.SERVER_KEY, (err, data) => {
            if (err) {
                res.status(403).json({
                    message: 'Token Inválido',
                    errorCode: err.name,
                    errorMsg: err.message
                })
            } else {
                req.token = { ...data }
                next()
            }
        })
    }

}

module.exports = verifyToken