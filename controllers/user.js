const User = require("../models/user")

// middleware functions

// verify user
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
        res.sendStatus(200)
    } catch (err) {
        next(err)
    }
}

module.exports.userInfo = async (req, res, next) => {
    try {
        const _id = req.params.id
        if (!_id) res.json({ msg: "User id is required " })
        const user = await User.findOne({ _id })
        if (!user)
            res.json({
                msg: 'Invalid id!!',
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
        const _id = req.params.id
        const { fname, lname, phone_number, payment } = req.body

        if (!_id) res.json({
            msg: 'User id is required',
            status: false
        })

        // { filter }, { update }, { set new to 'true' to update }
        const user = await User.findOneAndUpdate(
            { _id }, 
            { fname, lname, phone_number, payment },
            { new: true }
        )

        console.log(user)

        if (!user) res.json({
            msg: 'Invalid id!!',
            status: false
        })

        res.status(200).json({ user })

    } catch (err) {
        next(err)
    }
}