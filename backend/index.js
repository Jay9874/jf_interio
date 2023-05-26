// Requiring all the packages
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const { connect } = require('http2');

// Initializing the express application

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json({ limit: '25mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(cors())
app.use(express.static(path.join(__dirname, '../client', 'build')))

// Defining the routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);












//Connect to the database before listening
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})





