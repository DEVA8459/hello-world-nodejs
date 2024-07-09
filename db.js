const mongoose = require("mongoose");

// defining mongodb url

// for local
// const mongoURL= 'mongodb://localhost:27017/myRest'

// for atlas

// for env
require("dotenv").config();

const DB_URL = process.env.MONGODB_URL;

const mongoURL = DB_URL;

// setup MOngoDB connection

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// get default connetion
// Mongoose maintain a default connection object representing the mongodb connection
const db = mongoose.connection;

// define event listners for database connection

db.on("connected", () => {
  console.log("connected to mongoDB server");
});
db.on("error", (err) => {
  console.log("mongoDB connection error:", err);
});
db.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

// export the database connection

module.exports = db;
