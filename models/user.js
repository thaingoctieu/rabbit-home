const mongoose = require('mongoose')
// import { apartmentSchema } from './apartment'

// room schema
const roomSchema = new mongoose.Schema({
    fan: String,
    light: String,
    servo: String,
    temp: String,
    humi: String,
    fire_detector: String,
})

// apartment schema
const apartmentSchema = new mongoose.Schema({
    bed: {
        type: roomSchema,
        require: true,
    },
    living: {
        type: roomSchema,
        require: true,
    },
    kitchen: {
        type: roomSchema,
        require: true,
    },
    dining: {
        type: roomSchema,
        require: true,
    },
})

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
    manager_id: mongoose.Schema.Types.String,
    apartment: Object
})

module.exports = mongoose.model("user", userSchema)