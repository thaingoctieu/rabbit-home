// get information of a specific device type

const ADevice = require('../models/abstract_devices')
const Devices = require('../models/devices')

// path = /getInfo/:device_id
module.exports.getInfo = async (req, res, next) => {
    try {
        const { device_id } = req.params

        // find abstract device of the device_id (Devices schema)
        const adevice = await Devices.findOne({ _id: device_id })
        if (!adevice) res.json({ msg: 'Invalid device_id', status: false })
        const abstract_id = adevice.abstract_id

        // find info of this type (Abstract device)
        const typeInfo = await ADevice.findOne({ _id: abstract_id })
        if (!typeInfo) res.json({ msg: 'Invalid abstract_id', status: false })

        res.status(200).json({ typeInfo, status: true })
    } catch (err) {
        next(err)
    }
}