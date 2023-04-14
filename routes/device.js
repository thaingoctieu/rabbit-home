const {
    getValue,
} = require("../controllers/activeDevices")

const router = require("express").Router()

router.get('/getvalue/:type-:device_id', getValue)

module.exports = router