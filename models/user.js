const mongoose = require('mongoose')

// create user schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
    },
    fname: String,
    lname: String,
    gender: String,
    password: String,
    state: Number,
    type: String,
    payment: String,
    concurrent_device: Number,
    phone_number: String,
    manager_id: String,
    apartment: Object
})

module.exports = mongoose.model("user", userSchema, "user")