const express = require('express');
const routes = express.Router();

routes.use('/', require('./authRoute'));
routes.use('/', require('./productRoute'));
routes.use('/', require('./addtocartRoute'));

module.exports = routes;