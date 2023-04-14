const express = require('express');
const app = express();
app.use(express.json());

const port = 3000;
require("dotenv").config();

const db = require('./services/connectDB')
const authRoutes = require("./routes/auth");


// connect database
db.connect()

// use middle ware
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT)


// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });




