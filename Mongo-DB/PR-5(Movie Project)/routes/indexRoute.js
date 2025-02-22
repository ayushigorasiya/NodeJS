
const express = require('express');

const routes = express.Router();

routes.use('/act',require('./actionRoute'));

module.exports = routes;