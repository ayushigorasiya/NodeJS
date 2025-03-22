const express = require('express');
const routes = express.Router();

const { AddToCartPage, AddToCart, DeleteToCart } = require('../controllers/addtocartController')

routes.get('/addtocartpage', AddToCartPage);
routes.post('/addtocart', AddToCart);
routes.get('/deletetocart', DeleteToCart);

module.exports = routes;