const mongoose = require("mongoose")

async function connectDb () {
    try {
    let result = await new mongoose.connect(process.env.MONGO_URI)
     console.log("connected...")

    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connectDb;

