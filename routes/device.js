const {
    getValue,
    setValue
} = require('../controllers/activeDevices')

const {
    getInfo,
} = require('../controllers/devicesTypeInfo')

const router = require("express").Router()

router.get('/getvalue/:type-:device_id', getValue)
router.post('/setvalue/:type-:device_id', setValue)
router.get('/getInfo/:device_id', getInfo)

module.exports = router