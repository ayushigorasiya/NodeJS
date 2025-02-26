const express = require('express');

const routes = express.Router();


const {addExsubcategoryPage,insertExsubcategory,ajaxCategorywiseRecord,viewExsubcategorypage} = require('../controllers/ExsubcategoryController');
routes.get('/', viewExsubcategorypage)
routes.get('/addexsubcategorypage',addExsubcategoryPage);
routes.post('/insertexsubcategory',insertExsubcategory);

routes.get('/ajaxcategorywiserecord', ajaxCategorywiseRecord);

module.exports = routes;