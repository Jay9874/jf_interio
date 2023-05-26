// Requiring all the packages
require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const { connect } = require('http2')

// Initializing the express application

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json({ limit: '25mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(cors())

// Defining the routes
const authRoutes = require('./routes/auth')
app.use('/api/auth', authRoutes)

// Testing the server
app.get('/api', (req, res) => {
  res.send('Hello World')
})

// Frontend Routes
app.use(express.static(path.resolve(__dirname, '../frontend', 'build')))
app.get('*', (req, res) => {
  res.sendFile(
    path.resolve(__dirname, '../frontend', 'build', 'index.html'),
    function (err) {
      if (err) {
        res.status(500).send(err)
      }
    }
  )
})

//Connect to the database before listening
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('listening for requests')
  })
})
