const mongoose = require('mongoose')

// room schema
export const roomSchema = new mongoose.Schema({
    fan: mongoose.Schema.Type.ObjectId,
    light: mongoose.Schema.Type.ObjectId,
    servo: mongoose.Schema.Type.ObjectId,
    temp: mongoose.Schema.Type.ObjectId,
    humi: mongoose.Schema.Type.ObjectId,
    fire_detector: mongoose.Schema.Type.ObjectId,
})

// apartment schema
export const apartmentSchema = new mongoose.Schema({
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