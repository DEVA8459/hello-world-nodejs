const mongoose = require('mongoose');

// Load environment variables from .env file
require('dotenv').config();

// Define MongoDB URL (either from environment variables or hardcoded for local development)
const mongoURL = process.env.MONGODB_URL ;

// Set up MongoDB connection with options
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true, // Ensure TLS is enabled if you're using a secure connection
})
.then(() => {
    console.log('Connected to MongoDB server');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

// Get default connection
const db = mongoose.connection;

// Define event listeners for database connection
db.on('error', err => {
    console.error('MongoDB connection error:', err);
});
db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// Export the database connection
module.exports = db;