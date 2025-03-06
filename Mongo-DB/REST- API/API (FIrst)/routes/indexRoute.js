const express = require('express');

const routes = express.Router();

routes.use('/', require('./authRoute'));// auth route
module.exports = routes;