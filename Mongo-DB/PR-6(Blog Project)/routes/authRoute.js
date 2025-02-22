const express = require('express');
const routes = express.Router();
const{registerPage, loginPage, registerUser, dashboardPage, logoutUser ,loginUser} = require('../controllers/authController');
const { checkUserLogin } = require('../middleware/checkUser');

routes.get('/' , loginPage);
routes.post('/loginuser' , loginUser);
routes.get('/register' , registerPage);
routes.post('/registeruser' , registerUser);
routes.get('/dash' , checkUserLogin , dashboardPage);
routes.get('/logoutuser' , logoutUser);

module.exports = routes;