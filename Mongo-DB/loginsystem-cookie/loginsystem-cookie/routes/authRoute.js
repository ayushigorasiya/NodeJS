const express = require('express');

const routes = express.Router();

const { registerPage, loginPage, registerUser, dashboardPage, aboutPage, productPage } = require('../controllers/AuthController');


routes.get('/', loginPage)
routes.get('/register', registerPage)
routes.post('/registeruser', registerUser)
routes.get('/dash', dashboardPage)
routes.get('/about', aboutPage)
routes.get('/product', productPage)

module.exports = routes;