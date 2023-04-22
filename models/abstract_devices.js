const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId;


const abstractDevice = new mongoose.Schema({
    abstract_name: String,
    name: String,
    origin: String,
    price: Number,
    description: String,
    amount_in_stock: Number,
    manager_id: ObjectId
})

module.exports = mongoose.model('abstract_device', abstractDevice, 'abstract_device')