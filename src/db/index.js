const mongoose = require('mongoose')
const DB_Name = require('../constants.js');

const connectDB = async () =>{
    try {
     const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
     console.log("connection is establisted",connectionInstance.connection.host);
    } catch (error) {
        console.error("MongoDB Connection error", error);
        process.exit(1)
    }
}

module.exports = connectDB