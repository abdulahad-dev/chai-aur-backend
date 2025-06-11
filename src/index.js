// require('dotenv').config({path: './env'});
import dotenv from "dotenv";
import { app } from './app.js';
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`⚙️  Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err) =>{
    console.log("Mongo DB Connection failed !!!", err);
})

//********1st Approch************/ 

// import mongoose from "mongoose";
// import { DB_Name } from "./constants";

// import express from "express";
// const app = express();

// (async()=>{
// try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
//     app.on("errror", (error)=>{
//         console.log("ERRR: ", errror);
//         throw error
//     })

//     app.listen(process.env.PORT, ()=>{
//         console.log(`App is listening on port ${process.env.PORT}`);
//     })
// } catch (error) {
//     console.error("ERROR: ", error);
//     throw err
// }
// })()