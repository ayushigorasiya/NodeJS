const express = require('express');
const routes = express.Router();
const{registerPage, loginPage, registerUser, dashboardPage, logoutUser ,loginUser} = require('../controllers/authController');

const passport = require ('passport')
routes.get('/' , loginPage);
routes.post('/loginuser' ,passport.authenticate('local' , {failureRedirect : '/'}), loginUser);
routes.get('/register' , registerPage);
routes.post('/registeruser' , registerUser);
routes.get('/dash' ,passport.checkUser,   dashboardPage);
routes.get('/logoutuser' , logoutUser);

module.exports = routes;