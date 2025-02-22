const express = require('express');

const routes = express.Router();

const { viewUser, addUser } = require('../controllers/UserController');

routes.get('/' , viewUser);
routes.get('/adduser' , addUser);

module.exports = routes;