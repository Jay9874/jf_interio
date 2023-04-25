// Requiring all the packages
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');
const { connect } = require('http2');

// Initializing the express application

const app = express();
const PORT = process.env.PORT || 8081;















//Connect to the database before listening
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})





