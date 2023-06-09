const jwt = require('jsonwebtoken');

module.exports.authentication = async (req, res, next) => {
    try {
        const token = req.headers.authorization
        if (token === undefined) throw new Error("No token provided!")

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const { email } = decoded;
            req.user = { email };
            // call next middleware function
            //// btw: in case wanna skip the rest of the router’s middleware functions, call next('router')
            next();
        } catch (error) {
            throw new Error("Not authorized!");
        }
    } catch (error) {
        next(error);
    }
}