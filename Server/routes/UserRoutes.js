const express = require('express');
const {register,login} = require('../controllers/UserController')
const Router=express.Router();

Router.post('/register', register),
Router.post('/login',login)

module.exports =Router