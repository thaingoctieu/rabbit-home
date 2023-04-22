const mongoose = require('mongoose')
const ObjectId =  mongoose.Schema.ObjectId;

const Device = new mongoose.Schema({
    abstract_id: ObjectId,
})

module.exports = mongoose.model('devices', Device, 'devices')