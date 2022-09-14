const express = require('express');
const {register,login,userDetail} = require('../controllers/UserController')
const Router=express.Router();

Router.post('/register', register),
Router.post('/login',login)
Router.get('/:fullname',userDetail)

module.exports =Router