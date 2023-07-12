const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// const { OAuth2Client } = require('google-auth-library')
// const client = new OAuth2Client(process.env.CLIENT_ID)
const jwt_secret = process.env.JWT_SECRET

exports.signup = (req, res) => {
  const { fullname, username, email, password } = req.body
  User.findOne({ email: email })
    .then(savedUser => {
      if (savedUser) {
        return res
          .status(422)
          .json({ error: 'User already exists with that email' })
      }
      bcrypt.hash(password, 12).then(hashedPassword => {
        const user = new User({
          fullname,
          username,
          email,
          password: hashedPassword
        })
        user.save((err, user) => {
          if (err) {
            return res.status(400).json({
              err: 'Not able to save user in DB',
              error: err
            })
          }
          jwt.sign(
            { _id: user._id },
            jwt_secret,
            { expiresIn: '1d' },
            (err, token) => {
              if (err) {
                return res.status(400).json({
                  err: 'Not able to save user in DB',
                  error: err
                })
              }
              res.json({
                fullname: user.fullname,
                username: user.username,
                email: user.email,
                id: user._id
              })
            }
          )
        })
      })
    })
    .catch(err => {
      res.status(400).json({
        err: 'Not able to save user in DB',
        error: err,
        message: err.message
      })
    })
}

exports.signin = (req, res) => {
  const { email, password } = req.body
  User.findOne({ email: email })
    .then(savedUser => {
      if (!savedUser) {
        return res.status(422).json({ error: 'Invalid email or password' })
      }
      bcrypt.compare(password, savedUser.password).then(doMatch => {
        if (doMatch) {
          const token = jwt.sign({ _id: savedUser._id }, jwt_secret)
          const { _id, fullname, username, email } = savedUser
          res.json({
            token,
            user: { _id, fullname, username, email }
          })
        } else {
          return res.status(422).json({ error: 'Invalid email or password' })
        }
      })
    })
    .catch(err => {
      return res.status(422).json({ error: 'Invalid email or password' })
    })
}
