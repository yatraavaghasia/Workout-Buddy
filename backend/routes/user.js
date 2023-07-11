const express = require('express');

//controller functions 
const { singupUser, loginUser } = require('./../controllers/userController');

const router = express.Router();
//login route
router.post('/login', loginUser);
//signup route
router.post('/signup', singupUser);
module.exports = router;