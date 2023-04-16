const {
    getValue,
    setValue,
} = require("../controllers/activeDevices")

const router = require("express").Router()

router.get('/getvalue/:type-:device_id', getValue)
router.post('/setvalue/:type-:device_id', setValue)

module.exports = router