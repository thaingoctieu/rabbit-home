const {
    login,
    userInfo,
    modifyInfo,
} = require("../controllers/user")

const router = require("express").Router()

router.post('/login', login)
router.get('/userInfo/:id', userInfo)
router.patch('/modifyInfo/:id', modifyInfo)


// error handler
router.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

module.exports = router