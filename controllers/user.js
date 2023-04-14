const User = require("../models/user")

// middleware functions
module.exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user)
            return res.json({ msg: 'invalid email!!', status: false })
        if (password !== user.password)
            return res.json({ msg: 'incorrect password!!', status: false })
        return res.json({ status: true, user })
    } catch (err) {
        next(err)
    }
}


// module.exports.logout = async (req, res, next) => {

// }