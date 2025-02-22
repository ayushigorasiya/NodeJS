const express = require('express');

const routes = express.Router();

const { viewProduct, addProduct } = require('../controllers/ProductController');


routes.get('/',viewProduct)
routes.get('/addproduct',addProduct)


module.exports = routes;