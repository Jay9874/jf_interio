require('dotenv').config()
const { config } = require('dotenv')
const mongoose = require('mongoose')
const encrypt = require('mongoose-encryption')
const secret = process.env.ENCRYPTION_KEY

const UserSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: [true, 'First Name is required']
  },
  username: {
    type: String,
    required: [true, 'Username is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
}, { timestamps: true })


UserSchema.plugin(encrypt, { secret: secret, encryptedFields: ['password'] })

const User = mongoose.model('User', UserSchema)
module.exports = User
