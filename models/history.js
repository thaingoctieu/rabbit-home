const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId;

const fanHistory = new mongoose.Schema({
    device_id: {
        type: ObjectId,
        require: true,
        unique: true,
    },
    value: Number,
    time: Date
}, {
    versionKey: false // You should be aware of the outcome after set to false
})

const ledHistory = new mongoose.Schema({
    device_id: {
        type: ObjectId,
        require: true,
        unique: true,
    },
    value: Number,
    time: Date
}, {
    versionKey: false
})

const gasHistory = new mongoose.Schema({
    device_id: {
        type: ObjectId,
        require: true,
        unique: true,
    },
    value: Number,
    time: Date
}, {
    versionKey: false
})

const pirHistory = new mongoose.Schema({
    device_id: {
        type: ObjectId,
        require: true,
        unique: true,
    },
    value: Number,
    time: Date
}, {
    versionKey: false
})

const servoHistory = new mongoose.Schema({
    device_id: {
        type: ObjectId,
        require: true,
        unique: true,
    },
    value: Number,
    time: Date
}, {
    versionKey: false
})

const tempHumiHistory = new mongoose.Schema({
    device_id: {
        type: ObjectId,
        require: true,
        unique: true,
    },
    temp_value: Number,
    humi_value: Number,
    time: Date
})


const fanHistoryModel = mongoose.model('fan_volume', fanHistory, 'fan_volume')
const ledHistoryModel = mongoose.model('led_volume', ledHistory, 'led_volume')
const gasHistoryModel = mongoose.model('gas_volume', gasHistory, 'gas_volume')
const pirHistoryModel = mongoose.model('pir_volume', pirHistory, 'pir_volume')
const servoHistoryModel = mongoose.model('servo_volume', servoHistory, 'servo_volume')
const tempHumiHistoryModel = mongoose.model('temp_humi_volume', tempHumiHistory, 'temp_humi_volume')

const deviceHistory = (type) => {
    switch (type) {
        case 'fan':
            return fanHistoryModel
            break;
        case 'led':
            return ledHistoryModel
            break;
        case 'gas':
            return gasHistoryModel
            break;
        case 'pir':
            return pirHistoryModel
            break;
        case 'servo':
            return servoHistoryModel
            break;
        case 'temp_humi':
            return tempHumiHistoryModel
            break;
        default:
            console.log('Error!')
    }
}

module.exports = deviceHistory



