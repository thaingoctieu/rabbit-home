const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId;

// room schema
const roomSchema = new mongoose.Schema({
    fan: ObjectId,
    light: ObjectId,
    servo: ObjectId,
    temp: ObjectId,
    humi: ObjectId,
    fire_detector: ObjectId,
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
    manager_id: ObjectId,
    apartment: apartmentSchema
})

module.exports = mongoose.model("user", userSchema, "user")