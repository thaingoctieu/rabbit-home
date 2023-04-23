const User = require("../models/user")
const jwt = require('jsonwebtoken')

// middleware functions

// verify user
// login function return all user info and create 1 token for the current time
module.exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) res.json({ msg: 'Invalid email!!', status: false })
        if (password !== user.password)
            res.json({
                msg: 'Incorrect password!!',
                status: false
            })

        // jwt
        const token = jwt.sign({ email }, process.env.JWT_SECRET, {
            expiresIn: '30d'
        });

        res.status(200).json({ status: true, user, token })
    } catch (err) {
        next(err)
    }
}

module.exports.userInfo = async (req, res, next) => {
    try {
        // get user email from req.user (see middleware/authen.js)
        const { email } = req.user
        if (!email) res.json({
            msg: "Can not get user email!",
            status: false
        })
        const user = await User.findOne({ email })
        if (!user)
            res.json({
                msg: 'Invalid email!!',
                status: false
            })

        const { fname, lname, phone_number, payment, concurrent_device, type } = user
        res.status(200).json({
            data: {
                fname,
                lname,
                phone_number,
                payment,
                concurrent_device,
                type
            }
        })
    } catch (err) {
        next(err)
    }
}

module.exports.modifyInfo = async (req, res, next) => {
    try {
        // get user email from req.user (see middleware/authen.js)
        const { email } = req.user
        if (!email) res.json({ msg: "Can not get user email!" })

        const { fname, lname, phone_number, payment } = req.body

        if (!email) res.json({
            msg: "Can not get user email!",
            status: false
        })

        // { filter }, { update }, { set new to 'true' to update }
        const user = await User.findOneAndUpdate(
            { email },
            { fname, lname, phone_number, payment },
            { new: true }
        )

        if (!user) res.json({
            msg: 'Invalid email!',
            status: false
        })

        res.status(200).json({ user, status: true })

    } catch (err) {
        next(err)
    }
}