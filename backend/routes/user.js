const express = require('express')

const router = express.Router()
const { signupUser , loginUser , checkUser } = require('../controllers/userControllers')
//login route
router.post('/login',loginUser)

//signup route
router.post('/signup',signupUser)

//individual user
router.get('/login/:email',checkUser)

module.exports = router