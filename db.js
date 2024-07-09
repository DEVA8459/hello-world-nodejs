const mongoose = require("mongoose")

// defining mongodb url



// for atlas DB_URL

// for env
require('dotenv').config();

// for local LOCAL_URL
// uncoment below if using local

// const mongoURL= process.env.LOCAL_URL

const mongoURL=process.env.MONGODB_URL

// setup MOngoDB connection 


mongoose.connect(mongoURL);


// get default connetion 
// Mongoose maintain a default connection object representing the mongodb connection 
const db =mongoose.connection 

// define event listners for database connection 

db.on('connected',()=>{
    console.log('connected to mongoDB server')
})
db.on('error',(err)=>{
    console.log('mongoDB connection error:',err)
})
db.on('disconnected',()=>{
    console.log('mongoDB disconnected')
})

// export the database connection 

module.exports = db;


