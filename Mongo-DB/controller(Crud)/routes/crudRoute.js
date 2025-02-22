const express = require('express');

const routes = express.Router();

const { viewCrud, addCrud } = require('../controllers/CrudController');


routes.get('/',viewCrud)
routes.get('/addcrud',addCrud)


module.exports = routes;