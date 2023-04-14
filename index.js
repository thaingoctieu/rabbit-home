const express = require('express');
const app = express()

// parses incoming JSON requests and puts the parsed data in req.body
app.use(express.json())

require("dotenv").config()

const db = require('./services/connectDB')
const authRoutes = require("./routes/auth")
const deviceRoutes = require('./routes/device')

// connect database
db.connect()

// use middle ware
app.use("/auth", authRoutes)
app.use("/device", deviceRoutes)

//
app.listen(process.env.PORT)





