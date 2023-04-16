const mongoose = require("mongoose");
require("dotenv").config();

async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connect Successfully");
    } catch (err) {
        console.log(err)
    }
}

module.exports = { connect }