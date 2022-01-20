const mongoose = require('mongoose')

const connection_string = "mongodb+srv://varun:password1234@fullstackprac.zsazs.mongodb.net/test"

const connectDB = async () => {
    try {
        await mongoose.connect(connection_string)
        console.log("CONNECTED TO THE DATABASE")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB