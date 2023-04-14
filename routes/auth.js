const {
    login,
} = require("../controllers/user")

const router = require("express").Router()

router.post('/login', login)
// router.get("/logout/:id", logout)


// error handler
// router.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.status(500).send('Something broke!')
// })

module.exports = router