const express = require('express');
const app = express()
const db = require('./services/connectDB')
const authRoutes = require("./routes/auth")
const deviceRoutes = require('./routes/device')
const cors = require('cors')
const observer = require('./services/Observer')
require("dotenv").config()

// connect database
db.connect()

// middleware usage
// parses incoming JSON requests and puts the parsed data in req.body
app.use(express.json())
app.use(cors())
app.use("/auth", authRoutes)
app.use("/device", deviceRoutes)
// observer.init()

//
app.listen(process.env.PORT, () => {
    console.log(`Server run at port ${process.env.PORT}`)
})





