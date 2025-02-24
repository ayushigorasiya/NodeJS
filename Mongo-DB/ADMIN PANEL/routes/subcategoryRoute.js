const express = require('express');

const routes = express.Router();

const { AddSubcategoryPage, ViewSubcategoryPage, InsertSubcategory,EditSubcategory } = require('../controllers/subCategoryController');

routes.get('/', ViewSubcategoryPage)
routes.get('/addsubcategorypage', AddSubcategoryPage);
routes.post('/insertsubcategory', InsertSubcategory);
routes.get('/editsubcategory' ,EditSubcategory)


module.exports = routes;