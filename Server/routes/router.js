const express = require('express');
const {signupUser} = require('../controller/usercontroller')
const {loginUser}= require('../controller/usercontroller')
const {userdetails}= require('../controller/detailscontroller')
const router=express.Router();

router.post('/', signupUser);
router.post('/login',loginUser);
router.get('/details',userdetails);

module.exports = {router};