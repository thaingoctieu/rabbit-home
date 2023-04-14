// on-working devices info
const history = require('../models/history')

// get latest value of specific device
// path: /getValue/:type-:device_id
module.exports.getValue = async (req, res, next) => {
    try {
        const { device_id, type } = req.params
        const device = await history(type).findOne({ device_id })
        if (!device) res.json({ msg: 'Invalid device_id', status: false })
        const value = []
        if (type !== 'temp_humi') value[0] = device.value
        else {
            value[0] = device.temp_value
            value[1] = device.humi_value
        }
        res.status(200).json({ value })
    } catch (err) {
        next(err)
    }
}