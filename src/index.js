require('dotenv').config({path : './.env'});
const mongoose = require("mongoose");
const connectDB = require('./db/index.js')


connectDB();
// const DB_Name = require("./constants")
// console.log(DB_Name) 
// const express = require("express")

// const app = express();
// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
//         app.on("error", ()=> console.error("unable to recieve data from the database"))
//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is running on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("Error ",error)
//     }
// })()