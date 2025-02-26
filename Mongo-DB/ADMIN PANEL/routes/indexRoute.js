const express = require('express');

const routes = express();

routes.use('/',require('./authRoute'));
routes.use('/category' , require('./categoryRoute'));
routes.use('/subcategory' , require('./subcategoryRoute'));
routes.use('/exsubcategory',require('./exsubcategoryRoute'));

module.exports = routes;