// Requiring all the packages
const express = require('express')
const router = express.Router()
const { signup, signin } = require('../controller/auth')

// Defining the routes
/**
 * @route POST api/auth/signup
 * @description register user
 * @access public
 **/
router.post('/signup', signup)

/**
 * @route POST api/auth/sigin
 * @description login user
 * @access public
 **/
router.post('/login', signin)

module.exports = router